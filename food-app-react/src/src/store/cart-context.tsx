import React from "react";

export interface CartItem{
    id: string;
    name: string;
    amount: number;
    price: number;
}

interface CartContextState{
    items: CartItem[];
    totalAmount: number;
    addItem: (item: CartItem)=>void,
    removeItem: (id: string)=>void;
}

const defaultCartState:CartContextState = {
    items: [],
    totalAmount: 0,
    addItem: ()=>{},
    removeItem: () => {}
};

const CartContext = React.createContext(defaultCartState);

export default CartContext;