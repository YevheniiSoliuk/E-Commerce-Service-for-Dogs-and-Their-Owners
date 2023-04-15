import { auth, firestore } from './../firebase.config';
import { doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { userCol } from '../utils/db';
import { IUser } from '../interfaces/User';
import { onAuthStateChanged } from 'firebase/auth';
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
  const currentUser = {};

  try {
    const userDocs = await getDocs(userCol);

    userDocs.forEach(async (userDoc) => {
      const user = userDoc.data();

      if (user.uid === userID) {
        // if(user.addressRef) {
        //   const addressSnapshot = await getDoc(user.addressRef);

        //   if(addressSnapshot !== undefined && addressSnapshot.exists()) {
        //     user.address = addressSnapshot.data();
        //   }
        // }

        if (user.animalsRefs) {
          user.animals = [];
          user.animalsRefs.forEach(async (animalRef) => {
            const animal = await getUserAnimal(animalRef);
            user.animals?.push(animal);
          });
        }

        if (user.favouriteProductsRefs) {
          user.favouriteProductsIDs = [];

          user.favouriteProductsRefs.forEach(async (favouriteProductRef) => {
            const favouriteProductSnapshot = await getDoc(favouriteProductRef);
            if (
              favouriteProductSnapshot.exists() &&
              user.favouriteProductsIDs !== null &&
              user.favouriteProductsIDs !== undefined
            ) {
              user.favouriteProductsIDs.push(favouriteProductSnapshot.id);
            }
          });
        }

        if (user.ordersRefs) {
          const ordersIDs: string[] = [];

          user.ordersRefs.forEach(async (orderRef) => {
            const orderSnapshot = await getDoc(orderRef);
            if (orderSnapshot.exists()) {
              ordersIDs.push(orderSnapshot.id);
            }
          });
        }

        Object.assign(currentUser, user);
        debugger;
      }
    });
  } catch (error) {
    console.log(error);
  }

  return currentUser as IUser;
};
