import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from '../firebase/_firebase_init';
import useAxiosPublic from '../Hook/useAxiosPublic';

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
// -----------------------------
function AuthProvider({children}) {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(false)
  const axiosPublic = useAxiosPublic()
  // new user for email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google
  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // signout
  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };
// update user info

const updateUserInfo = (name,photo) => {
  return updateProfile(auth.currentUser,{
    displayName:name,
    photURL:photo
  }
    );
};
  // send user info
  const SendUserInfo = {
    user,
    loading,
    signIn,
    google,
    signout,
    createUser,
    // passWordReset,
    updateUserInfo,
  };
// onAuthState hold and delele
useEffect(()=> {
  const storeUserInfo = onAuthStateChanged(auth,currentUser => {
    setUser(currentUser);
    if(currentUser){
      const userInfo = {email : currentUser?.email}
      axiosPublic.post('/jwt',userInfo)
      .then(res => {
        if(res.data?.token){
          localStorage.setItem('Access-token',res.data.token);
          // setLoading(false)
          // console.log(res.data.token)
        }
      })
    }else{
      localStorage.removeItem('Access-token')
    }
    setLoading(false)
    console.log('CurrentUser ----> is ',currentUser)
  })
  return ()=>{
   storeUserInfo()
  }
})

  return (
    <AuthContext.Provider value={SendUserInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider