import React from 'react'
import { useState } from 'react';
import authContext from './auth-context'; 

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginToken, setLoginToken] = useState(null);
    
  const userLogin = (token) =>{
    setIsLoggedIn(true);
    setLoginToken(token);
  }

  const userLogout = ()=>{
    setIsLoggedIn(false);
    setLoginToken(null);
  }

  return (
    <authContext.Provider value={{
        isLoggedIn: isLoggedIn,
        logInToken: loginToken,
        userLogin: userLogin,
        userLogout: userLogout,
    }}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthContextProvider