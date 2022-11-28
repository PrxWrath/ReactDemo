import React from 'react'
import Card from '../UI/Card'
import './UserList.css'

const UserList = (props) => {
  return (
    <Card>
        <div className='user-list'>
            {props.users?.map(user=>{
                return(
                    <li key={user.id} className='user-list__item'>
                        {`${user.name} (${user.age} years old) from ${user.college}`}
                    </li>
                )
            })}
        </div>    
    </Card>
  )
}

export default UserList