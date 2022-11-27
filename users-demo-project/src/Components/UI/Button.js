import React from "react";
import "./Button.css";

const Button = (props) => {
  let clickable = props.onClick;

  return (
    <>
      {clickable ? (
        <button type={props.type} onClick={props.onClick} className="s-button">
          {props.children}
        </button>
      ) : (
        <button type={props.type} className="s-button">
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
