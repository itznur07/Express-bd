import React, { createContext, useReducer } from 'react';

export const cartContext = createContext()

const intialState = {
    shoppingCart : [],
    totalPrice : 0,
    qty : 0,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'add_to_cart':
           return console.log('add to cart case');
        default:
            return state
    }
}

const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(reducer , intialState)

  return (
    <cartContext.Provider value={{cart, dispatch}}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartContextProvider