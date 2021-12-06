// Using the Context in my components, first importing the React hook
import { useContext, useEffect, useState } from "react";
// Second importing the Context itself
import CartContext from "../../../store/cart-context";

// Components
import CartIcon from "../../Cart/CartIcon/CartIcon";

// Style
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  // this will control whether or not the button should be animated
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

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

  // using object destructuring to pull out the items from the cartCtx so I can just refer to them later, so that not the entire conteXt but only the items array is a dependency for this effect function
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNum, item) => {
    // My CartItems objects will have an amount field which stores the number of items per item type
    return currNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    // setting a timer to remove the class so when the user clicks the button again the animation plays again not just the first time the button is clicked
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // cleanup function, if many timers were added on top of each other, i want to clear the old timer and make sure that a new timer is set
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
