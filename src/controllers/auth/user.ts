import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '../../firebase.config';
import { ILoginCredentials, IUser } from '../../interfaces/User';

export const signUpUser = (user: IUser) => {
  return createUserWithEmailAndPassword(auth, user.email, user.password);
};

export const login = (credentials: ILoginCredentials) => {
  return signInWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  );
};

export const logout = () => {
  return signOut(auth);
};
