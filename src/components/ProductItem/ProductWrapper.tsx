import React from 'react';
import { IProduct } from '../../interfaces/Order';
import { toggleProductInFavourites } from '../../controllers/userController';
import { ProductListViewItem } from './ProductListViewItem';
import { ProductCard } from './ProductCard';

export type ProductWrapperProps = {
  product: IProduct;
  addToCart: () => void;
  view: string;
  favouriteProducts: string[];
  setFavouriteProducts: React.Dispatch<React.SetStateAction<string[]>>;
  currentUserID: string | undefined;
};

export const ProductWrapper: React.FC<ProductWrapperProps> = ({
  product,
  addToCart,
  view,
  favouriteProducts,
  setFavouriteProducts,
  currentUserID
}) => {
  const isFavourite = (productID: string) => {
    return favouriteProducts.includes(productID);
  };

  const addToFavourites = async (id: string) => {
    try {
      if (currentUserID) {
        await toggleProductInFavourites(id, currentUserID, 'ADD');
        setFavouriteProducts([...favouriteProducts, id]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromFavourites = async (id: string) => {
    try {
      if (currentUserID) {
        await toggleProductInFavourites(id, currentUserID, 'DELETE');
        setFavouriteProducts(
          favouriteProducts.filter((productID) => productID !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavouriteClick = async () => {
    const productID = product.id;

    if (isFavourite(productID)) {
      await deleteFromFavourites(productID);
    } else {
      await addToFavourites(productID);
    }
  };

  return (
    <>
      {view === 'cards' ? (
        <ProductCard
          product={product}
          addToCart={addToCart}
          isFavourite={isFavourite}
          handleFavouriteClick={handleFavouriteClick}
        />
      ) : (
        <ProductListViewItem
          product={product}
          addToCart={addToCart}
          isFavourite={isFavourite}
          handleFavouriteClick={handleFavouriteClick}
        />
      )}
    </>
  );
};
