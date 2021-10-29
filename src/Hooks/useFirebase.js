import { useEffect, useState } from "react";
import firebaseAuthentication from "../Fireabase/firebase.init";

import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

firebaseAuthentication();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  // sign in with google provider

  const signInGoogle = (from, history) => {
    setIsloading(true);
    const provier = new GoogleAuthProvider();
    signInWithPopup(auth, provier)
      .then((result) => {
        const userInfo = result.user;
        setUser(userInfo);
        setIsloading(false);
        history.push(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
        setIsloading(false);
      });
  };

  // manually new user creating

  const manuallySignUp = (email, password, name) => {
    console.log(email, password, name);
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const userInfo = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
        setUser(userInfo);
        setIsloading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
        setIsloading(false);
      });
  };

  // user manually sign in-
  const manuallySignIn = (email, password, from, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const userInfo = result.user;
        setUser(userInfo);
        setIsloading(false);
        history.push(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setIsloading(false);
      });
  };

  // obserbing redering---
  useEffect(() => {
    setIsloading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsloading(false);
      } else {
        setUser(null);
        setIsloading(false);
      }
    });
  }, []);

  // logout-

  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setIsloading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return {
    isLoading,
    user,
    error,
    logOut,
    signInGoogle,
    manuallySignUp,
    manuallySignIn,
  };
};

export default useFirebase;
