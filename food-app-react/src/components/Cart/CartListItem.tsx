// import { CartItem } from '../../store/cart-context';
import './CartListItem.css';

interface CartListItemProps{
    price: number;
    name: string;
    amount: number;
    onRemove: ()=>void;
    onAdd: ()=>void;
}

export default function CartListItem (props: CartListItemProps) {
  const price = `€ ${props.price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{props.name}</h2>
        <div className="summary">
          <span className="price">{price}</span>
          <span className="amount">x {props.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};
