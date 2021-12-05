// Style
import classes from "./MealItemForm.module.css";

// Components
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      {/* the value of the input is an object hence the double curly braces */}
      <Input
        label='Amount'
        // default props that can be added to any input element
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
