import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const cartContext = createContext();

const intialState = {
  shoppingCart: [],
  totalPrice: 0,
  qty: 0,
};

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, intialState);

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
