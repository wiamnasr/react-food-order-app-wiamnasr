import { Fragment } from "react";

// Meals Image
import mealsImage from "../../../../src/assets/meals.jpg";

// Style
import classes from "./Header.module.css";

// Components
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Food Order App</h1>
        {/* can use any name but chose onClick that is similar to the onClick available on html elements */}
        {/* passing a pointer to the function I am receiving on props.onShowCart */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='A table of meals' />
      </div>
    </Fragment>
  );
};

export default Header;
