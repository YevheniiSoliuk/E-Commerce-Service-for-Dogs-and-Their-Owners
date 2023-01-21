import React, { useCallback, useEffect } from "react";
import Button from "../commons/Button/Button";
import StarRating from "../commons/StarRating";
import { IProduct } from "../../interfaces/Order";
import { Link } from "react-router-dom";
import { IBrand } from "../../interfaces/Brand";
import { useAddProductToFavoritesMutation, useDeleteProductFromFavoritesMutation } from "../../features/ApiProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useUsersQuery } from "../../features/ApiUserSlice";
import { setNewFavoriteProducts } from "../../features/auth/AuthSlice";

export type ProductCardProps = {
  product: IProduct,
  brands: IBrand[] | undefined,
  action: ()=>void,
}

const ProductCard = ({product, brands, action}: ProductCardProps) => {
  const {id, title, brand_id, photos, price, base_price, discount_amount, discount_price, rate} = {...product};
  const user = useSelector((state: RootState) => state.auth.user);
  const [addToFavorite, result] = useAddProductToFavoritesMutation();
  const [deleteFromFavorites] = useDeleteProductFromFavoritesMutation();

  const getUsersData: ()=>void = useUsersQuery().refetch;

  const dispatch: AppDispatch = useDispatch();

  const isFavourite = useCallback((id: number) => {
    return user?.favourites.includes(id);
  }, [user])

  const addToFavourites = async (id: number) => {
    await addToFavorite(id)
    .unwrap()
    .then((payload) => dispatch(setNewFavoriteProducts(payload[`Updated product with id: ${id}`][`Record with id: ${id} added successfully to favourites!`])))
    .catch((error) => console.error(error));
  }

  const deleteFromFavourites = async (id: number) => {
    await deleteFromFavorites(id)
    .unwrap()
    .then((payload) => dispatch(setNewFavoriteProducts(payload[`Updated product with id: ${id}`][`Record with id: ${id} removed successfully!`])))
    .catch((error)=> console.error(error))
  }

  return (
    <div className="flex flex-col justify-start w-[230px] h-[100%] bg-yellow border-2 border-green shadow-lg px-[10px] py-[10px] text-left rounded-[25px] mb-[20px] tracking-[.1em] relative">
      <Link to={`/product/${id}`}>
        {photos === undefined ? <img src="./images/product-image.jpg" alt="product" className="w-[100%] mb-[20px]"/> :
        <img src={photos[0]} alt="Product1" className="w-[100%] mb-[20px]"/>}
      </Link>
      {isFavourite(Number(id)) ? 
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="absolute w-[30px] h-[30px] fill-dark_red stroke-green hover:fill-green hover:cursor-pointer right-[10px] top-[10px]" 
          onClick={()=>{deleteFromFavourites(Number(id))}}
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
        </svg> :
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="absolute w-[30px] h-[30px] fill-green hover:fill-dark_red hover:cursor-pointer right-[10px] top-[10px]" 
          onClick={()=>{addToFavourites(Number(id))}}
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
        </svg>
      }
      {discount_amount !== null && discount_amount !== 0 ? <>
        <span className="trapezoid relative"></span>
        <span className="absolute text-white text-[20px] font-bold -rotate-45 left-[2%] top-[3%]">{discount_amount}%</span>
      </>
      : null
      }
      <h3 className="text-[16px] mb-[10px]">
        {brands?.find((brand: IBrand) => brand.id === brand_id)?.name}
      </h3>
      <p className="text-[12px] truncate mb-[6px]">{title}</p>
      <StarRating type="static" active={rate} size="h-[15px] w-[15px]" alignment="text-left" rates="15"/>
      <div className="flex justify-between items-end mt-[10px]">
        <div className="text-left">
          {discount_price !== null && discount_price !== undefined && discount_amount !== 0 ?
            <p className="text-[20px] mb-[7px] text-dark_red">{price - discount_price} zł</p> :
            <p className="text-[20px] mb-[7px] text-dark_red">{price} zł</p>
          }
          <p className="text-[12px]">({base_price} zł/kg)</p>
        </div>
        <Button text="Dodaj" value="add" styles="w-[75px] h-[45px] bg-orange border-2 border-green rounded-br-[20px] shadow-md px-[5px] py-[10px] text-center hover:border-0 active:border-2" onClick={action}/>
      </div>
    </div>
  )
}

export default ProductCard;