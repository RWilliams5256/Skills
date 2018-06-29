import { auth } from './firebase';

//sign up
export const doCreateUserWithEmailAndpassword = (email, password) => 
    auth.createUserWithEmailAndPassword(email, password);

//sign in
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.doSignInWithEmailAndPassword(email, password);

//sign out
export const doSignout = () =>
    auth.signOut();

    