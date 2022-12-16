import { useContext } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import authContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  
  const passwordRef = useRef();
  const authCtx = useContext(authContext);
  const history = useHistory();

  const changePasswordHandler = async(e) => {
    e.preventDefault();
    try{
      const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCr27y7q1JW2qG764N0ZftdsCSWEVZcoVc',{
        method:'POST',
        body:JSON.stringify({
          idToken: authCtx.logInToken,
          password: passwordRef.current.value,
          returnSecureToken: true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const data = await res.json();
      
      if(!res.ok){
        throw new Error(data.error.errors[0].message);
      }else{
        setTimeout(()=>{alert('Password changed! Login with new password:)')}, 1000)
        authCtx.userLogout();
        history.replace('/auth');
      }
      
    }catch(err){
      alert(err.message)
    }

  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef}/>
      </div>
      <div className={classes.action}>
        <button onClick={changePasswordHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
