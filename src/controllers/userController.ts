import { firestore } from './../firebase.config';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore';
import { productCol, userCol } from '../utils/db';
import { IUser } from '../interfaces/User';
import { getUserAnimal } from './animalController';
import { IAnimal } from '../interfaces/Animal';

export const createUser = async (user: IUser) => {
  let usersAmount = 0;

  const querySnapshot = await getDocs(userCol);
  usersAmount = querySnapshot.size;
  console.log(usersAmount);

  const userRef = doc(firestore, userCol.path, `user${usersAmount}`);
  user.id = `user${usersAmount}`;

  await setDoc(userRef, user);
};

type getUserFn = (userID: string) => Promise<IUser | null>;

export const getCurrentUser: getUserFn = async (userID) => {
  try {
    const userQuery = query(userCol, where('uid', '==', userID));
    const querySnapshot = await getDocs(userQuery);
    const userDoc = querySnapshot.docs[0];

    if (!userDoc.exists()) {
      return null;
    }

    const user = userDoc.data();

    if (user.animalsRefs) {
      user.animals = await Promise.all(
        user.animalsRefs.map(
          async (animalRef) => await getUserAnimal(animalRef)
        )
      );
    }

    if (user.favouriteProductsRefs) {
      const favouriteProductsSnapshots = await Promise.all(
        user.favouriteProductsRefs.map((favouriteProductRef) =>
          getDoc(favouriteProductRef)
        )
      );

      user.favouriteProductsIDs = favouriteProductsSnapshots
        .filter((snapshot) => snapshot.exists())
        .map((snapshot) => snapshot.id);
    }

    if (user.ordersRefs) {
      const ordersSnapshots = await Promise.all(
        user.ordersRefs.map((orderRef) => getDoc(orderRef))
      );

      user.ordersIDs = ordersSnapshots
        .filter((snapshot) => snapshot.exists())
        .map((snapshot) => snapshot.id);
    }

    return user;
  } catch (error) {
    return null;
  }
};

export const toggleProductInFavourites = async (
  productID: string,
  userID: string,
  type: string
) => {
  const userQuery = query(userCol, where('uid', '==', userID));
  const querySnapshot = await getDocs(userQuery);
  const userDoc = querySnapshot.docs[0];

  const productRef = doc(productCol, productID);

  if (type === 'ADD') {
    await updateDoc(userDoc.ref, {
      favouriteProductsRefs: arrayUnion(productRef)
    });
  } else {
    await updateDoc(userDoc.ref, {
      favouriteProductsRefs: arrayRemove(productRef)
    });
  }
};
