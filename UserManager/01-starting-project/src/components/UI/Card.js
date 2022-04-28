import classes from './Card.module.css';

function Card(props) {
    const combinedClassName = `${classes.card} ${props.className}`;

    return (
      <div className={combinedClassName}>
          {props.children}
      </div>
    );
}
  
export default Card;