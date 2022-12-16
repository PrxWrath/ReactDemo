import React from 'react'

const authContext  = React.createContext({
    isLoggedIn: false,
    logInToken: null,
    userLogin: (token)=>{},
    userLogout: ()=>{}
})
export default authContext