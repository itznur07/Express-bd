import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

const intialState = {
  shoppingCart: [],
  totalPrice: 0,
  qty: 0,
};

const reducer = (state, action) => {

  const {shoppingCart, totalPrice, qty } = state; // Destrucering

  // Declear Variables for store data

  let product;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case "add_to_cart":
      const check = shoppingCart.find(product => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedPrice = totalPrice + product.price;
        updatedQty = qty + 1;
        return { shoppingCart : [product, ...shoppingCart], totalPrice : updatedPrice , qty : updatedQty };
      }
    default :
      return state;
  }
};

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(reducer, intialState);

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
