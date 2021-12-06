// for outputting Cart Items
import { useContext } from "react";

// context object
import CartContext from "../../store/cart-context";

// Style
import classes from "./Cart.module.css";

import Modal from "../UI/Modal/Modal";

// components
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  // activating the connection
  const cartCtx = useContext(CartContext);

  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;

  // to check cartCt.items is not empty
  const hasItems = cartCtx.items.length > 0;

  // functions for adding and removing from the Cart
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    // this will trigger the addItem function
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          // calling bind with params null and item.id to ensure that the id of the to-be-added or removed item is passed here to remove handler
          // bind pre-configures a function for future execution and allows to pre-configure the argument that function will receive when its being executed
          // this is needed here to make sure that these functions do receive the id or the item respectively
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          // same here but passing the overall item
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/* making sure that this Order button only shows up when we have items in the cart */}
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
