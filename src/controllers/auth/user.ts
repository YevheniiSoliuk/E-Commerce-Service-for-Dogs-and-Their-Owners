import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { IUser } from "../../interfaces/User";
import { createUser } from "../userController";


export const signUpUser = (user: IUser) => {
  createUserWithEmailAndPassword(auth, user.email, user.password)
  .then(userCredential => {
    user.uid = userCredential.user.uid;
    createUser(user);
  })
  .catch(error => {
    return error;
  })
}