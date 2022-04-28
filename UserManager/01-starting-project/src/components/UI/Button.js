import classes from './Button.module.css';

function Button(props) {
    const combinedClassName = `${classes.button} ${props.className}`;

    return (
      <button className={combinedClassName} onClick={props.onClick}>
          {props.children}
      </button>
    );
}
  
export default Button;