import classes from "./Button.module.css";

function Button(props) {
  const cominedClassName = `${classes.button} ${props.className}`;

  return (
    <button>
      className={cominedClassName} onClick={buttonClickHandler}
      {props.children}
    </button>
  );
}
export default Button;
