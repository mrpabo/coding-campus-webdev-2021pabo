import Modal from '../UI/Modal';
import './Cart.css';

const DUMMY_ITEMS = [
    {
      id: "m1",
      name: "Sushi",
      amount: 2,
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      amount: 3,
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      amount:1,
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      amount: 6,
      price: 18.99,
    },
  ];


interface CartProps {
  onHideCart: ()=>void;
}

export default function Cart(props: CartProps){

    const cartItems = (
        <ul className='cart-items'>
        { DUMMY_ITEMS.map((item) => (<li>{item.name} | {item.amount}</li>))}
    </ul>);

    return(
        <Modal onHideCart={props.onHideCart}>
            <div className='cart-items'>{cartItems}</div>
            <div className='total'>
                <span>Summe</span>
                <span>12,34</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onHideCart}>Schließen</button>
                <button className='button--alt'>Bestellen</button>
            </div>
        </Modal>
    );
}