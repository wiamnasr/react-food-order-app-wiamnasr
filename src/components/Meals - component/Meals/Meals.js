import { Fragment } from "react";

// Components
import MealsSummary from "../MealsSummary/MealsSummary";
import AvailableMeals from "../AvailableMeals/AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
