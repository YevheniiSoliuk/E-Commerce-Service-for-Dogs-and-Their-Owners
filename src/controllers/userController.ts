import { auth, firestore } from './../firebase.config';
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { userCol } from "../utils/db";
import { IUser } from '../interfaces/User';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserAnimal } from './animalController';
import { IAnimal } from '../interfaces/Animal';

export const createUser = async (user: IUser) => {
  let usersAmount = 0;

  await getDocs(userCol).then(resolve => {
    usersAmount = resolve.size;
    console.log(usersAmount);
  })

  const userRef = doc(firestore, userCol.path, `user${usersAmount}`);
  user.id = `user${usersAmount}`;

  await setDoc(userRef, user)
  .then(() => {
    console.log("User with id: " + userRef.id + " successfully added to firestore.");
  })
  .catch(error => {
    console.log("Error " + error);
  });
}

type getUserFn = (userID: string) => Promise<IUser | null>;

export const getCurrentUser: getUserFn = async (userID) => {
  let currentUser: IUser | null = null;

  try {
    const userDocs = await getDocs(userCol);
  
    userDocs.forEach(userDoc => {
        let user = userDoc.data();
        
        if(user.uid === userID)
        {
          if(user.addressRef)
          {
            getDoc(user.addressRef)
            .then(resolve => {
              if(resolve !== undefined && resolve.exists())
              {
                user.address = resolve.data();
              }
            })
          }

          if(user.animalsRefs)
          {
            user.animals = [];
            user.animalsRefs.forEach(animalRef => {
              user.animals?.push(getUserAnimal(animalRef));
            }) 
          }

          if(user.favouriteProductsRefs)
          {
            user.favouriteProductsIDs = [];

            user.favouriteProductsRefs.forEach(async favouriteProductRef => {
              await getDoc(favouriteProductRef)
              .then(resolve => {
                if(resolve.exists() && user.favouriteProductsIDs !== null && user.favouriteProductsIDs !== undefined)
                {
                  user.favouriteProductsIDs.push(resolve.id); 
                }
              })
            })
          }

          if(user.ordersRefs)
          {
            let ordersIDs: string[] = [];

            user.ordersRefs.forEach(async orderRef => {
              await getDoc(orderRef).then(resolve => {
                if(resolve.exists())
                {
                  ordersIDs.push(resolve.id);
                }
              })
            })
          }
          
          currentUser = Object.assign({} as IUser, user);
          console.log(currentUser);
        }
    })
  } catch(error) {
    console.log(error);
  }

  return currentUser;
}