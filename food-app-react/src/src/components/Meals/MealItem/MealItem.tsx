import { Meal } from "../../../App";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

interface MealItemProps {
  meal: Meal;
}

export default function MealItem(props: MealItemProps) {

  function addToCartHandler(amount: number){
    //TODO
    
  }

  return (
    <li className="meal-item">
      <div>
        <h3>{props.meal.name}</h3>
        <div className="description">{props.meal.description}</div>
        <div className="price">€{props.meal.price}</div>
      </div>
      <MealItemForm
        meal={props.meal}
        onAddToCart={addToCartHandler}
      ></MealItemForm>
    </li>
  );
}
