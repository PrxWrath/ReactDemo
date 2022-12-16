import React from 'react'
import { useState } from 'react';
import authContext from './auth-context'; 

const AuthContextProvider = (props) => {
  const localToken = localStorage.getItem('LOGIN_TOKEN');
  const [loginToken, setLoginToken] = useState(localToken);
  const isLoggedIn = !!loginToken;
    
  const userLogin = (token) =>{
    setLoginToken(token);
    localStorage.setItem('LOGIN_TOKEN', token);
  }

  const userLogout = ()=>{
    setLoginToken(null);
    localStorage.clear();
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