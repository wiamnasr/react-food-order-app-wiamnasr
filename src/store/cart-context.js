/* 

    Making sure that items can be added to the Cart using Context

    => I want to manage the overall cart data through COntext because I will need it in different places of the application

            => On the mealItems I need to update the Cart
                => Output in the Cart component
                    => Manage the Cart component in the future (items can be added or removed)


    => The store folder is for storing the application wide state management

*/

import React from "react";

// Initializing the context with default data that will not be used but will give me better auto-completion later
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

// This context will be managed in some component with useState or useReducer, so this Context can change over time and update parts of the application
