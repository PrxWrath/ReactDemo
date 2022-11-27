import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import './ErrorPopup.css'

const ErrorOverlay = (props) => {
    
    return(
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
const ErrorPopup = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<ErrorOverlay setShowError={props.setShowError} heading={props.heading} msg={props.msg}/>,
      document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default ErrorPopup