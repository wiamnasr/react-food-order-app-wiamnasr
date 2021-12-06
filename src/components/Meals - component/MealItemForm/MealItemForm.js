// importing useState to be able to output an error message below my input and button, useState will help me manage the state as its a simple state
import { useRef, useState } from "react";

// Style
import classes from "./MealItemForm.module.css";

// Components
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  // controlling whether this form is valid or not
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // The value here is always a string
    const enteredAmount = amountInputRef.current.value;
    // this will convert returned string to a number
    const enteredAmountNumber = +enteredAmount;

    // if either of these conditions is met, I want to return and not continue with this function execution of this submitHandler
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    // executing my context method to add a cart item, by calling a function that I expect to get on props
    // Not done in this component as the cartItem that I want to add, needs more data than just the enteredAmount, in this MealItemForm, we only have the amount (no id, name or price)
    // That's why I'm not calling the context method here but calling a function I'm expecting to get through props to pass the entered and validated amount number to that function
    // This function is defined in the MealItem component
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* the value of the input is an object hence the double curly braces */}
      <Input
        // extracting entered amount using refs
        ref={amountInputRef}
        label='Amount'
        // default props that can be added to any input element
        input={{
          id: "amount_"+ props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount ( 1 - 5 )</p>}
    </form>
  );
};

export default MealItemForm;
