import { getDoc, getDocs, query, where } from 'firebase/firestore';
import { IProduct } from '../interfaces/Order';
import { productCol } from '../utils/db';

export const getProducts = async () => {
  const products: IProduct[] = [];

  try {
    const productDocs = await getDocs(productCol);

    for (const productDoc of productDocs.docs) {
      const product = productDoc.data();
      product.id = productDoc.id;

      if (product.brandRef) {
        const brandDoc = await getDoc(product.brandRef);

        if (brandDoc.exists()) {
          product.brand = brandDoc.data();
        }
      }

      if (product.subcategoryRef) {
        const subcategoryDoc = await getDoc(product.subcategoryRef);

        if (subcategoryDoc.exists()) {
          product.subcategoryID = subcategoryDoc.id;
        }
      }

      products.push(product);
    }
  } catch (e) {
    console.log(e);
  }

  return products;
};

export const getProduct = (id: string) => {
  let product = {} as IProduct;
  const productQuery = query(productCol, where('id', '==', `${id}`));

  const productDocs = async () => {
    return await getDocs(productQuery);
  };

  productDocs().then((resolve) => {
    resolve.forEach((productDoc) => {
      if (productDoc.exists()) {
        product = productDoc.data();
      } else {
        console.log('Product by id:' + id + ' does not exists!');
      }
    });
  });

  return product;
};
