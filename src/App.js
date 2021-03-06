import { useState } from "react";

// Style
import classes from "./App.module.css";

// Components
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals - component/Meals/Meals";
import Cart from "./components/Cart/Cart";

// Context
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className={classes.mainApp}>
      {/* using a separate CartProvider component to keep it lean */}
      <CartProvider>
        {/* will render a Cart if cartIsShown is truthy and not render it when its falsy */}
        {cartIsShown && <Cart onClose={hideCartHandler} />}

        {/* showCardHandler should be called whenever a button in the Header is clicked, should probably expect to get tha</divt showCardHandler called from inside the Header */}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
