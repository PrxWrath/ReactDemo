import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorPopup from "../UI/ErrorPopup";
import "./AddUser.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);
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
        const user = {
            id: Math.random().toString(),
            name:userName,
            age:userAge
        }
        props.onAddUser(user)
    }
    
    setUserName('');
    setUserAge('');
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
            <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <label>Age</label>
            <input type="number" step='1' max='120' value={userAge} onChange={(e)=>{setUserAge(e.target.value)}}/>
            <Button type="Submit">Add User</Button>
        </form>
        </Card>
    </>
    
  );
};

export default AddUser;
