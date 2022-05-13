import React, { Fragment, useEffect, useState } from "react";
import "./HeaderCartButton.css";
import CartIcon from "./CartIcon";
import { Meal } from "../../App";

interface HeaderCartButtonProps {
  onShowCart: ()=>void;
  cart: Meal[];
}


export default function HeaderCartButton(props: HeaderCartButtonProps) {
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let total = 0;
    for (const cartItem of props.cart) {
      total += cartItem.price;
    }
    if (total > 0) {
      setTotalPrice(total + "€");
    }
  }, [props.cart]);

  return (
    <button className="button" title={totalPrice} onClick={props.onShowCart}>
      <span className="icon">
        {" "}
        <CartIcon />{" "}
      </span>
      <span>Your Cart</span>
      <span className="badge">{props.cart.length}</span>
    </button>
  );
}
