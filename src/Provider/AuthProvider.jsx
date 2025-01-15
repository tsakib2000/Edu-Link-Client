import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useEffect } from "react";
import useAxiosPublic from './../Hooks/useAxiosPublic';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
 const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user,setUser]=useState(null)
  const axiosPublic=useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
const signOutUser=()=>{
  return signOut(auth)
}
const signInUser=(email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn=()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider);
}
const updateUserProfile=(name,photo)=>{
  return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
}
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        if(currentUser){
          const userEmail= {email:currentUser.email}
          axiosPublic.post('/jwt',userEmail)
          .then(res=>{
            if(res.data.token)
              localStorage.setItem('access_token',res.data.token)
            setLoading(false)
          })
        }else{
localStorage.removeItem('access_token')
setLoading(false)
        }
        setLoading(false)
    });
    return ()=>{
       return unsubscribed(); 
    }
  }, [axiosPublic]);


  
  const authInfo = {
    createUser,
    user,
    loading,
    signOutUser,
    setUser,
    updateUserProfile,
    signInUser,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};


AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

