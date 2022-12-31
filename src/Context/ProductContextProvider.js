import React, { createContext, useState } from "react";

// Images Collactions
import blackshoes from "../assets/img/blackshoes.jpg";
import cap from "../assets/img/cap.jpg";
import perfume from "../assets/img/perfume.jpg";
import huddie from "../assets/img/pinkhuddie.jpg";
import nikeshoes from "../assets/img/shoes.jpg";
import smartwatch from "../assets/img/smartwatch.jpg";
import swetar from "../assets/img/swetar.jpg";
import tsirtbag from "../assets/img/tsirtbag.jpg";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Huddie", price: 104, image: huddie, status: "hot" },
    {
      id: 2,
      name: "Smart Watch",
      price: 504,
      image: smartwatch,
      status: "new",
    },
    { id: 3, name: "Nike Shoes", price: 1508, image: nikeshoes, status: "hot" },
    {
      id: 4,
      name: "T-sirts & Bag",
      price: 908,
      image: tsirtbag,
      status: "new",
    },
    { id: 5, name: "Nike Brand Cap", price: 218, image: cap, status: "hot" },
    {
      id: 6,
      name: "Black Shoes",
      price: 1099,
      image: blackshoes,
      status: "new",
    },
    { id: 7, name: "Swetart", price: 679, image: swetar, status: "new" },
    {
      id: 8,
      name: "Perfume Gallary",
      price: 599,
      image: perfume,
      status: "hot",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
