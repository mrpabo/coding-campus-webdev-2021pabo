import React, { Fragment, useContext, useEffect, useState } from "react";
import "./HeaderCartButton.css";
import CartIcon from "./CartIcon";
import { Meal } from "../../App";
import CartContext from "../../store/cart-context";

interface HeaderCartButtonProps {
  onShowCart: ()=>void;
}

export default function HeaderCartButton(props: HeaderCartButtonProps) {
  
  //context abrufen
  const cartCtx = useContext(CartContext);
  //total amount holen und unten statt X ausgeben
  const numberOfCartItems = cartCtx.items.reduce(
    (curNumber, item) => { 
      return curNumber + item.amount; 
    }, 0 
  );


  return (
    <button className="button" onClick={props.onShowCart}>
      <span className="icon">
        {" "}
        <CartIcon />{" "}
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
}
