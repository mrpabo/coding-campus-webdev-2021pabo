import classes from "./Card.module.css";

function Card(props) {
  const cominedClassName = `${classes.card} ${props.className}`;
  return <div className={cominedClassName}>{props.children}</div>;
}

export default Card;
