import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const[users,setUsers] = useState([
    {id:'u1', name:'Pratyush', age:'21'},
    {id:'u2', name:'John', age:'23'}
  ])

  
  const createUser = (user)=>{
    setUsers(prevUser => {
      return([user, ...prevUser]);
    })
  }

  return (
    <div className="App-interface">
      <AddUser onAddUser = {createUser}/>
      <UserList users = {users}/>
    </div>
  );
}

export default App;
