import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function App() {

  const [cart, setCart] = useState<Meal[]>([]);
  //add state for cartmodal
  const [showCart, setShowCart] = useState(false);

  function addCartItems(meals: Meal[]) {
    setCart([...cart, ...meals]);
  }

  function showCartHandler(){
    setShowCart(true);
  }

  function hideCartHandler(){
    setShowCart(false);
  }

  return (
    <Fragment>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} cart={cart} />
      <main>
        <Meals addCartItems={addCartItems} />
      </main>
    </Fragment>
  );
}
