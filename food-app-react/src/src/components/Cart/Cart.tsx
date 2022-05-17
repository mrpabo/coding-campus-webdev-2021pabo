import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import './Cart.css';

interface CartProps {
  onHideCart: ()=>void;
}

export default function Cart(props: CartProps){
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

    const cartItems = (
        <ul className='cart-items'>
        { cartCtx.items.map((item) => (<li>{item.name} | {item.amount}</li>))}
    </ul>);

    return(
        <Modal onHideCart={props.onHideCart}>
            <div className='cart-items'>{cartItems}</div>
            <div className='total'>
                <span>Summe</span>
                <span>{`€ ${cartCtx.totalAmount}`}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onHideCart}>Schließen</button>
                {hasItems && <button className='button--alt'>Bestellen</button>}
            </div>
        </Modal>
    );
}