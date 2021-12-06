// Giving access to context
import { useContext } from "react";

// importing the context that I want to access
import CartContext from "../../../store/cart-context";

// Style
import classes from "./MealItem.module.css";

// Components
import MealItemForm from "../MealItemForm/MealItemForm";

const MealItem = (props) => {
  // establishing a connection to CartContext to use it here
  const cartCtx = useContext(CartContext);

  const price = `£${props.price.toFixed(2)}`;

  // adding an item to cart, here I will get the validated amount as a parameter from MealItemForm
  const addToCartHandler = (amount) => {
    // Now I can call cartCtx.addItem, which is one of our methods defined in our context, where we point to addItemToCartHandler in the CartProvider component
    // expecting to get the item which will be forwarded to the reducer
    cartCtx.addItem({
      // making sure I get the props id from the AvailableMeals component where Im rendering all the items
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
