import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [cart, setCart] = useState(false);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  //create user with email & password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user with email & password
  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign in with google
  const signInGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  //logOut
  const logOut = () => {
    localStorage.removeItem("accessToken");
    return signOut(auth);
  };
  //observer on the Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const usersInfo = {
    cart,
    setCart,
    createUser,
    userLogin,
    logOut,
    user,
    signInGoogle,
  };
  return (
    <AuthContext.Provider value={usersInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;