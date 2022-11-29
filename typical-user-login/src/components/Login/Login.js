import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const userDataReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      email: action.value,
      pass: state.pass,
      emailIsValid: state.emailIsValid,
      passIsValid: state.passIsValid,
    };
  }

  if (action.type === "PASS_INPUT") {
    return {
      email: state.email,
      pass: action.value,
      emailIsValid: state.emailIsValid,
      passIsValid: state.passIsValid,
    };
  }

  if (action.type === "EMAIL_BLUR") {
    return {
      email: state.email,
      pass: state.pass,
      emailIsValid: state.email.includes('@'),
      passIsValid: state.passIsValid,
    };
  }

  if (action.type === "PASS_BLUR") {
    return {
      email: state.email,
      pass: state.pass,
      emailIsValid: state.emailIsValid,
      passIsValid: state.pass.trim().length>6,
    };
  }

  return {
    email: "",
    pass: "",
    emailIsValid: true,
    passIsValid: true,
  };
};

const Login = (props) => {
  
  const [formIsValid, setFormIsValid] = useState(false);

  const [userData, dispatchUser] = useReducer(userDataReducer, {
    email: "",
    pass: "",
    emailIsValid: true,
    passIsValid: true,
  });

  const emailChangeHandler = (event) => {
    dispatchUser({type:'EMAIL_INPUT', value:event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchUser({type:'PASS_INPUT', value:event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchUser({type:'EMAIL_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchUser({type:'PASS_BLUR'});
  };


  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userData.email, userData.pass);
  };
  
  const {emailIsValid: emailValidity, passIsValid: passwordValidity} = userData;

  useEffect(() => {
   const timer = setTimeout(setFormIsValid(emailValidity && passwordValidity),500);
    
    return ()=>{
      clearTimeout(timer);
    }
  }, [emailValidity, passwordValidity]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            userData.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={userData.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            userData.passIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userData.pass}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
