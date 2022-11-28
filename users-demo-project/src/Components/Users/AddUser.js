import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorPopup from "../UI/ErrorPopup";
import "./AddUser.css";

const AddUser = (props) => {
  const userName = useRef()
  const userAge = useRef()
  const userCollege = useRef()
  const [error, setError] = useState({
    heading:'',
    msg:''
  });
  const [showError, setShowError] = useState(false);

  const userSubmitHandler = (e) => {
    e.preventDefault();
    if(userName.length===0){
        setError({
            heading:'Invalid Input',
            msg:'Fields cannot be empty!!'
        });
        setShowError(true)
    }
    else if(parseInt(userAge)<=0){
        setError({
            heading:'Invalid Age',
            msg:'Please enter a valid age(> 0)!!'
        });
        setShowError(true)
    }
    else{
      const enteredName = userName.current.value;
      const enteredAge = userAge.current.value;
      const enteredCollege = userCollege.current.value;

        const user = {
            id: Math.random().toString(),
            name:enteredName,
            age:enteredAge,
            college: enteredCollege
        }
        props.onAddUser(user)
        userName.current.value = '';
        userAge.current.value = 0;
        userCollege.current.value = '';
    }
    
    
  }

  let errorPlaceHolder = (<></>);
  if(error.heading.length>0 && showError){
    errorPlaceHolder = (<ErrorPopup heading={error.heading} msg={error.msg} setShowError = {setShowError}/>)
  } 
  
  return (
    <>
        {errorPlaceHolder}
        <Card>
        <form className="user-form" onSubmit={userSubmitHandler}>
            <label>Name</label>
            <input type="text" ref={userName}/>
            <label>Age</label>
            <input type="number" ref={userAge}/>
            <label>College</label>
            <input type="text" ref={userCollege}/>
            <Button type="Submit">Add User</Button>
        </form>
        </Card>
    </>
    
  );
};

export default AddUser;
