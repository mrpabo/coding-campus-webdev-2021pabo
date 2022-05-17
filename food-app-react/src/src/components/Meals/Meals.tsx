import { Fragment } from "react";
import { Meal } from "../../App";
import AvailableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

interface MealsProps {
}

export default function Meals(props: MealsProps) {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
