import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { ILoginCredentials, IUser } from "../../interfaces/User";
import { createUser } from "../userController";


export const signUpUser = (user: IUser) => {
  createUserWithEmailAndPassword(auth, user.email, user.password)
  .then(async userCredential => {
    user.uid = userCredential.user.uid;
    await createUser(user);
  })
  .catch(error => {
    console.log(error.message);
  })
}

export const login = (credentials: ILoginCredentials) => {
  return signInWithEmailAndPassword(auth, credentials.email, credentials.password)
}

export const logout = () => {
  return signOut(auth);
}