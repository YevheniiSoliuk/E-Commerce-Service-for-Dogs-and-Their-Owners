import React, { useCallback } from 'react';
import { Button } from '../commons/Button/Button';
import { StarRating } from '../commons/StarRating';
import { ProductCardProps } from './ProductCard';
import { Link } from 'react-router-dom';
import { IBrand } from '../../interfaces/Brand';
import {
  useAddProductToFavoritesMutation,
  useDeleteProductFromFavoritesMutation
} from '../../features/ApiProductsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { setNewFavoriteProducts } from '../../features/auth/AuthSlice';
import { getCurrentUser } from '../../controllers/userController';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';

export const ProductListViewItem: React.FC<ProductCardProps> = ({
  product,
  action
}) => {
  const {
    id,
    title,
    brand,
    longDescription,
    images,
    price,
    basePrice,
    discountAmount,
    rate
  } = { ...product };
  //const user = useSelector((state: RootState) => state.auth.user);
  const [addToFavorite] = useAddProductToFavoritesMutation();
  const [deleteFromFavorites] = useDeleteProductFromFavoritesMutation();

  const dispatch: AppDispatch = useDispatch();

  const isFavourite = useCallback((id: string) => {
    const isFavourite = false;

    // onAuthStateChanged(auth, (user) => {
    //   const userID = user?.uid || '';
    //   getCurrentUser(userID).then((resolve) => {
    //     resolve?.favouriteProductsIDs?.includes(id);
    //   });
    // });

    return isFavourite;
  }, []);

  const addToFavourites = async (id: number) => {
    await addToFavorite(id)
      .unwrap()
      .then((payload) =>
        dispatch(
          setNewFavoriteProducts(
            payload[`Updated product with id: ${id.toString()}`][
            `Record with id: ${id.toString()} added successfully to favourites!`
            ]
          )
        )
      )
      .catch((error) => console.error(error));
  };

  const deleteFromFavourites = async (id: number) => {
    await deleteFromFavorites(id)
      .unwrap()
      .then((payload) =>
        dispatch(
          setNewFavoriteProducts(
            payload[`Updated product with id: ${id}`][
            `Record with id: ${id} removed successfully!`
            ]
          )
        )
      )
      .catch((error) => console.error(error));
  };

  return (
    <section
      className="flex justify-start w-full h-[100%] bg-yellow border-2 border-green shadow-lg px-[10px] 
      py-[10px] text-left rounded-[25px] mb-[20px] tracking-[.1em] relative"
    >
      <section className="relative w-[35%] mr-[25px]">
        <Link to={`/product/${id}`}>
          {images ? (
            <img src={images[0]} alt="Product1" className="w-full" />
          ) : (
            <img
              src={'./images/product-image.jpg'}
              alt="Product1"
              className="w-full"
            />
          )}
        </Link>
        {isFavourite(id) ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute w-[40px] h-[40px] fill-dark_red stroke-green hover:fill-green hover:cursor-pointer right-[10px] top-[10px]"
            onClick={() => {
              deleteFromFavourites(Number(id));
            }}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute w-[40px] h-[40px] fill-green hover:fill-dark_red hover:cursor-pointer right-[10px] top-[10px]"
            onClick={() => {
              addToFavourites(Number(id));
            }}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        )}
      </section>
      {discountAmount !== null ? (
        <>
          <span className="trapezoid relative"></span>
          <span className="absolute text-white text-[18px] -rotate-45 left-[0.5%] top-[3%]">
            {discountAmount}%
          </span>
        </>
      ) : null}
      <section className="flex flex-col justify-between items-justify w-[60%]">
        <div className="flex justify-between items-center my-[10px]">
          <h3 className="text-[20px]">{brand.name}</h3>
          <StarRating
            type="static"
            active={rate}
            size="h-[25px] w-[25px]"
            alignment="text-left"
            rates="15"
          />
        </div>
        <p className="text-[18px]">{title}</p>
        <p className="flex items-center grow text-[14px] text-center my-[20px] ">
          {longDescription}
        </p>
        <div className="flex justify-between items-center mb-[10px]">
          {discountAmount !== null ? (
            <>
              <p className="text-[24px] mb-[7px] text-dark_red">
                {price - price * (discountAmount / 100)} zł
              </p>
              <p className="text-[20px] mb-[7px] text-dark_red/50 line-through">
                {price} zł
              </p>
            </>
          ) : (
            <p className="text-[24px] mb-[7px] text-dark_red">{price} zł</p>
          )}
          <p className="text-[12px]">({basePrice} zł/kg)</p>
          <Button
            text="Dodaj"
            value="add"
            styles="w-[150px] h-[45px] bg-orange border-2 border-green rounded-[20px] shadow-md 
            px-[5px] py-[10px] text-center hover:border-0 active:border-2"
            onClick={action}
          />
        </div>
      </section>
    </section>
  );
};
