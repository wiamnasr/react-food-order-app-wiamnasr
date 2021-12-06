// Using the Context in my components, first importing the React hook
import { useContext } from "react";
// Second importing the Context itself
import CartContext from "../../../store/cart-context";

// Components
import CartIcon from "../../Cart/CartIcon/CartIcon";

// Style
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  /* 
    Third, calling useContext, passing in the CartContext to get access to the CartContext, managed by the closest provider (CartProvider used in the App component) inside of the HeaderCartButton component
    Now the HeaderCartButton will be re-evaluated by React whenever the cartCtx changes (Context)
    it changes when I update it in the CardProvider component
  */
  const cartCtx = useContext(CartContext);

  /* 

    This will be used to output the number of Cart items
    I don't want to add every item as an entry to the list, instead if for instance the user chooses 3 pieces of sushi, I want to add only one item to the array and set the amount for that item to 3 in this instance
    reduce will allow me to transform an array of data into a single value (a number in this case)
    2 arguments, a function and a starting value
    The function automatically receives 2 arguments by JS, current Number and the item at which its currently having a look
    initially the number will be a zero, but after the first time of execution it will be the result of the execution

  */

  const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
    // My CartItems objects will have an amount field which stores the number of items per item type
    return currNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
