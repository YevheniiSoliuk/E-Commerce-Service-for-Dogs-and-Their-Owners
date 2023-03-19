import { auth, firestore } from './../firebase.config';
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { userCol } from "../utils/db";
import { IUser } from '../interfaces/User';

export const createUser = (user: IUser) => {
  let usersAmount = 0;

  const userDocs = async () => {
    return await getDocs(userCol);
  }

  userDocs().then(resolve => {
    usersAmount = resolve.size;
  })

  const userRef = doc(firestore, userCol.path, `user${usersAmount}`);
  user.id = `user${usersAmount}`;

  setDoc(userRef, user)
  .then(resolve => {
    console.log("User with id: " + userRef.id + " successfully added to firestore.");
    console.log(resolve);
  })
  .catch(error => {
    console.log("Error " + error);
  });
}

type getUserFn = () => IUser | null;

export const getCurrentUser: getUserFn = () => {
  const userID = auth.currentUser?.uid;

  let currentUser: IUser | null = null;
  
  const usersDocs = async () => {
    return await getDocs(userCol);
  }

  usersDocs().then(resolve => {
    resolve.forEach(userDoc => {
      let user = userDoc.data();
      
      if(user.uid === userID)
      {
        if(user.addressRef)
        {
          const addressDoc = async () => {
            if(!user.addressRef){
              return;
            }

            return await getDoc(user.addressRef);
          }

          addressDoc().then(resolve => {
            if(resolve !== undefined && resolve.exists())
            {
              let address = resolve.data();
              user.address = address;
            }
          })
        }

        if(user.animalsRefs)
        {
          user.animalsIDs = [];

          user.animalsRefs.forEach(animalRef => {
            const animalDoc = async () => {
              return await getDoc(animalRef);
            }

            animalDoc().then(resolve => {
              if(resolve.exists() && user.animalsIDs !== null)
              {
                user.animalsIDs.push(resolve.id);
              }
            })
          }) 
        }

        if(user.favouriteProductsRefs)
        {
          user.favouriteProductsIDs = [];

          user.favouriteProductsRefs.forEach(favouriteProductRef => {
            const favouriteProductDoc = async () => {
              return await getDoc(favouriteProductRef);
            }

            favouriteProductDoc().then(resolve => {
              if(resolve.exists() && user.favouriteProductsIDs !== null)
              {
                user.favouriteProductsIDs.push(resolve.id); 
              }
            })
          })
        }

        if(user.ordersRefs)
        {
          let ordersIDs: string[] = [];

          user.ordersRefs.forEach(orderRef => {
            const orderDoc = async () => {
              return await getDoc(orderRef);
            }

            orderDoc().then(resolve => {
              if(resolve.exists())
              {
                ordersIDs.push(resolve.id);
              }
            })
          })
        }

        currentUser = user;
      }
    })
  })

  return currentUser;
}