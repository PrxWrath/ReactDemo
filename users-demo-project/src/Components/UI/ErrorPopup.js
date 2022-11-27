import React from 'react'
import Button from './Button'
import './ErrorPopup.css'

const ErrorPopup = (props) => {
  return (
    <div className='error-backdrop'>
        <div className='error-popup'>
            <h2 className='error-popup__heading'>{props.heading}</h2>
            <div className='error-popup__body'>
                {props.msg}
            </div>
            <Button type='button' onClick={()=>{props.setShowError(false)}}>OK</Button>
        </div>
    </div>
  )
}

export default ErrorPopup