import React from "react";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { Meal } from "../../App";

const DUMMY_MEALS: Meal[] = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Yellow Bowl",
    description: "Healthy...and yellow...",
    price: 15.99,
  },

  {
    id: "m6",
    name: "Blue Bowl",
    description: "Healthy...and blue...",
    price: 15.99,
  },
  {
    id: "m7",
    name: "Pink Bowl",
    description: "Healthy...and Pink...",
    price: 15.99,
  },
  {
    id: "m8",
    name: "Pink Panther",
    description: "Healthy...and panthery...",
    price: 15.99,
  },
];

interface AvailableMealsProps {}

export default function AvailableMeals(props: AvailableMealsProps) {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));
  return (
    <section className="available-meals">
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}
