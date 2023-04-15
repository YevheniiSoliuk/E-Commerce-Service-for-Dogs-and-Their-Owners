import { getDoc, getDocs, query, where } from 'firebase/firestore';
import { IProduct } from '../interfaces/Order';
import { productCol } from '../utils/db';

export const getProducts = () => {
  const products: IProduct[] = [];

  const productDocs = async () => {
    return await getDocs(productCol);
  };

  productDocs().then((resolve) => {
    resolve.forEach((productDoc) => {
      const product = productDoc.data();
      product.id = productDoc.id;

      if (product.brandRef) {
        const brandDoc = async () => {
          return await getDoc(product.brandRef);
        };

        brandDoc().then((resolve) => {
          if (resolve.exists()) {
            product.brand = resolve.data();
          }
        });
      }

      if (product.subcategoryRef) {
        const subcategoryDoc = async () => {
          return await getDoc(product.subcategoryRef);
        };

        subcategoryDoc().then((resolve) => {
          if (resolve.exists()) {
            product.subcategoryID = resolve.id;
          }
        });
      }

      products.push(product);
    });
  });

  console.log('Products from getProducts function');
  console.log(products);

  return products;
};

export const getProduct = (id: string) => {
  const productQuery = query(productCol, where('id', '==', `product${id}`));

  const productDocs = async () => {
    return await getDocs(productQuery);
  };

  productDocs().then((resolve) => {
    resolve.forEach((productDoc) => {
      if (productDoc.exists()) {
        return productDoc.data();
      } else {
        console.log('Product by id:' + id + ' does not exists!');
      }
    });
  });
};

export const switchProductInFavourites = (id: string) => {};
