import { firestore } from './../firebase.config';
import { doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { userCol } from '../utils/db';
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

    if (querySnapshot.docs[0]?.data()) {
      const user = querySnapshot.docs[0]?.data();

      if (user.animalsRefs) {
        user.animals = await Promise.all(
          user.animalsRefs.map(
            async (animalRef) => await getUserAnimal(animalRef)
          )
        );
      }

      if (user.favouriteProductsRefs) {
        user.favouriteProductsIDs = [];

        await Promise.all(
          user.favouriteProductsRefs.map((favouriteProductRef) => {
            getDoc(favouriteProductRef).then((resolve) => {
              if (
                resolve.exists() &&
                user.favouriteProductsIDs !== null &&
                user.favouriteProductsIDs !== undefined
              ) {
                user.favouriteProductsIDs.push(resolve.id);
              }
            });
          })
        );
      }

      if (user.ordersRefs) {
        user.ordersIDs = [];

        await Promise.all(
          user.ordersRefs.map((orderRef) => {
            getDoc(orderRef).then((resolve) => {
              if (
                resolve.exists() &&
                user.ordersIDs !== null &&
                user.ordersIDs !== undefined
              ) {
                user.ordersIDs.push(resolve.id);
              }
            });
          })
        );
      }

      return user;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
