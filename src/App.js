import { Fragment } from "react";

// Style
import classes from "./App.module.css";

// Components
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals - component/Meals/Meals";

function App() {
  return (
    <div className={classes.mainApp}>
      <Fragment>
        <Header />
        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
