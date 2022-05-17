import React from "react";
import "./Header.css";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import { Meal } from "../../App";

interface HeaderProps {
  onShowCart: ()=>void;
}

export default function Header(props: HeaderProps) {
  return (
    <Fragment>
      <header className="header">
        <h1>Food-Order</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src="header.jpg" />
      </div>
    </Fragment>
  );
}
