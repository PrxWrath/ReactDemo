import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import FormInput from "../UI/FormInput/FormInput";

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
      emailIsValid: state.email.includes("@"),
      passIsValid: state.passIsValid,
    };
  }

  if (action.type === "PASS_BLUR") {
    return {
      email: state.email,
      pass: state.pass,
      emailIsValid: state.emailIsValid,
      passIsValid: state.pass.trim().length > 6,
    };
  }

  return {
    email: "",
    pass: "",
    emailIsValid: null,
    passIsValid: null,
  };
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [userData, dispatchUser] = useReducer(userDataReducer, {
    email: "",
    pass: "",
    emailIsValid: null,
    passIsValid: null,
  });

  const emailChangeHandler = (event) => {
    dispatchUser({ type: "EMAIL_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchUser({ type: "PASS_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchUser({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchUser({ type: "PASS_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(userData.email, userData.pass);
  };

  const { emailIsValid: emailValidity, passIsValid: passwordValidity } =
    userData;

  useEffect(() => {
    const timer = setTimeout(
      setFormIsValid(emailValidity && passwordValidity),
      500
    );

    return () => {
      clearTimeout(timer);
    };
  }, [emailValidity, passwordValidity]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <FormInput
          label="E-Mail"
          id="email"
          type="email"
          value={userData.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          valid={userData.emailIsValid}
        />

        <FormInput
          label="Password"
          id="password"
          type="password"
          value={userData.pass}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          valid={userData.passIsValid}
        />
        
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
