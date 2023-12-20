import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const demoUser = { name: "nahid" };

  const axiosPublic = useAxiosPublic();
  //use state for user
  const [user, setUser] = useState(null);
  // use state for user Loading time
  const [userloading, setUserLoading] = useState(true);

  // singup with email pasword
  const emailPassSignup = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email Passwornd login
  const emailPassLogin = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const signoutUser = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  // User observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            setUserLoading(false);
          }
        });
      } else {
        localStorage.removeItem("token");
      }

      // console.log("user Form authProvider observer", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const authValues = {
    demoUser,
    emailPassSignup,
    emailPassLogin,
    signoutUser,
    user,
    userloading,
  };
  return (
    <AuthContext.Provider value={authValues}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
