// The goal of this component is to manage the current context data and provide that context to all components that want access to it

// useState and useReducer work here, but since its a little bit of a complex state (checking wether a meal is already part of the Cart and for removing), I will use useReducer to manage the state here
import { useReducer } from "react";

import CartContext from "./cart-context";

// Default cart state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

/*
  My cartReducer function outside of the component function because it won't need anything from the component and shouldn't be re-created all the time when the component is re-evaluated
  in reducer functions, a state object and an action is received automatically by React
  The action is dispatched by me later in the code
  The state is simply the last state snapshot of the state managed by the reducer
  a new state is returned by the reducer function
*/
const cartReducer = (state, action) => {
  // I only want to add this adding logic for this kind of action
  if (action.type === "ADD") {
    // I want to group items of the same meal together and manage the amount on a per meal basis, also want to update the total price of all aggregated cart items

    // Adding item to the array, created one equal to the items in the current state snapshot, which I get as a first argument in the Reducer by React, and call concat on it to add the new item to array, returning a new array without editing the existing one (being immutable in updating the state is important due to the ref value in javascript, meaning existing data in memory gets edited without react knowing about it)
    const updatedItems = state.items.concat(action.item);

    // updated total amount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // returning the new state snapshot
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// CartProvider component manage the Cart context data and provide that context to all components that want access to it
const CartProvider = (props) => {
  /*
    I need to first check if I have the item in the Cart, if its there, then I simply want to update the amount of the existing item
    else I want to add a new item
    will be managed as state, so tht this component and therefore the context and therefore any component affected by that context are re-evaluated whenever the Cart data changes
  */

  // re-using the defaultCartState here
  // The cartState (first element returned from destructuring the array) always contains the state snap-shot => The cartState is needed to construct the cartContext Object down
  // The second dispatchCartAction is a function that allows me to dispatch an action to the reducer
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Now here I can dispatch a Cart action
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      // using type as a property name for identifying the action, following a convention of having string, all caps identifier
      type: "ADD",
      // forwarding the item that I am expecting to get in the function up, to my reducer
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // adding a cart context helper const in this component function, this is dynamic
  const cartContext = {
    // instead of hard-coding, now I am managing this with cartState that is dynamic and changes
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
