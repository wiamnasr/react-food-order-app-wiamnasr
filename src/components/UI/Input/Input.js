import React from "react";

// Style
import classes from "./Input.module.css";

// This is the forwarded ref, being set in the input component
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      {/* I'm expecting input and label props */}
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* important to note the spread operator trick here to pass all other configuration data, I might've gotten for this input into this input element here as props */}
      {/* This ensures that all key value pairs in this input object which we receive on props input are added as props to input */}
      {/* convenient way to make this component highly configurable from outside this component through this input prop */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
