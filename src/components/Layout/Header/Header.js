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
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='A table of meals' />
      </div>
    </Fragment>
  );
};

export default Header;
