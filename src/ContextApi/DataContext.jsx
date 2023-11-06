import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
//Global Data Sending Context
export const GlobalDataContext = createContext(null);

//Google Login Auth Info
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

//Firebase Auth
import { auth } from "../Config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

//Data Context Components
const DataContext = ({ children }) => {
  //States
  const [activeUser, setActiveUser] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userFoodData, setUserFoodData] = useState([]);

  //Create User Email & Pass Func
  const createEmailUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //Login With Email And Password
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update User Info Image, Name etc..
  const userInfoUpdate = (name, imageUrl) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl,
    });
  };

  //Logout User
  const userLogout = () => {
    signOut(auth);
  };

  //Watch User
  onAuthStateChanged(auth, (user) => {

    setActiveUser(user);
    setLoading(false);
  });
  //Added Food Data
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/v1/user/get/foods/tools.rashed@gmail.com`
    )
      .then((res) => res.json())
      .then((data) => {
        
        setUserFoodData(data);
      });
  }, []);
  //Global Data Export
  const globalDataVariable = {
    createEmailUser,
    googleLogin,
    loginWithEmail,
    activeUser,
    userLogout,
    userInfoUpdate,
    setUserPhoto,
    userPhoto,
    loading,
    userFoodData
  };
  return (
    <GlobalDataContext.Provider value={globalDataVariable}>
      {children}
    </GlobalDataContext.Provider>
  );
};
DataContext.propTypes = {
  children: PropTypes.node,
};
export default DataContext;