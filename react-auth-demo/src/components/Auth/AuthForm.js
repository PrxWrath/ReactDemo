import { useState, useRef, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import classes from './AuthForm.module.css';
import authContext from '../../store/auth-context';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [waiting, setWaiting] = useState(false); 
  const emailRef = useRef();
  const passwordRef  = useRef();
  const history = useHistory();

  const authCtx = useContext(authContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = async(e) => {
    e.preventDefault();
    if(isLogin){
      try{
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCr27y7q1JW2qG764N0ZftdsCSWEVZcoVc', {
          method:'POST',
          body:JSON.stringify({
            email:emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        })
        const data = await res.json();

        if(res.ok){
          authCtx.userLogin(data.idToken);
          history.replace('/');
        }else{
          throw new Error(data.error.errors[0].message)
        }

        emailRef.current.value = '';
        passwordRef.current.value = '';
    }catch(err){
      alert(err.message);
    }
    }
    else{
      setWaiting(true);
      try{
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCr27y7q1JW2qG764N0ZftdsCSWEVZcoVc',{
          method:'POST',
          body:JSON.stringify({
            email:emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        })

        const data = await res.json();
        
        if(!res.ok){  
          throw new Error(data.error.errors[0].message)
        }else{
          authCtx.userLogin(data.idToken)
          history.replace('/');
        }

        emailRef.current.value = '';
        passwordRef.current.value = '';
        
      }catch(err){
        alert(err.message);
      }
      setWaiting(false);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef}/>
        </div>
        <div className={classes.actions}>
          {!waiting?<button>{isLogin ? 'Login' :'Create Account'}</button>:<button className={classes.toggle}>Sending Request...</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
