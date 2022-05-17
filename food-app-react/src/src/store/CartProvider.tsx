import { ReactNode, useReducer } from "react";
import CartContext, { CartItem } from "./cart-context";

interface CartProviderProps{
    children: ReactNode;
}

export interface CartState {
    items: CartItem[];
    totalAmount: number;
}

const defaultCartState: CartState ={
    items: [],
    totalAmount: 0
}

function cartReducer(state: CartState, action: {type: string, item: CartItem}){
    //state -> aktuelle Snapshot von unserem Warenkorb
    //action -> welche aktion wir ausführen möchten (ADD, REMOVE) + daten (obj)

    if(action.type === 'ADD'){
        const newItemToAdd = action.item;

        //item(s) zu bisherigem State hinzufügen
        const updatedItems = state.items.concat(newItemToAdd);

        //totalamount berechnen
        const updatedTotalAmount = state.totalAmount + newItemToAdd.price * newItemToAdd.amount;

        //neuer state mit daten zurückgeben
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    
    }

    if(action.type === 'REMOVE'){
        //item löschen
    }

    return defaultCartState; //TODO: neue aktualisierte state
}

export default function CartProvider(props: CartProviderProps){
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemToCartHandler(item: CartItem){
        dispatchCartAction({type: 'ADD', item: item})
    }

    function removeItemFromCarthandler(id: string){
        //TODO
        //dispatchCartAction({type: 'REMOVE', id: id})

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCarthandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}