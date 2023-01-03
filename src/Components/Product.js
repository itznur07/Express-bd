import React, { useContext } from "react";
import { cartContext } from "../Context/CartContextProvider";
import { ProductContext } from "../Context/ProductContextProvider";
import Bannar from './Bannar';

const Product = () => {

  const { products } = useContext(ProductContext);

  const {dispatch} = useContext(cartContext)

  return (
    <>
      <Bannar />
      <div className="mx-14">
        <div className="flex items-center justify-between space-y-6 my-8 flex-wrap sm:space-x-2">
          {products.map((product) => (
            <div key={product.id} className="w-52 shadow rounded lg:w-72 ">
              <img src={product.image} alt="not found" />
              <div className="text-center my-4">
                <h1 className="text-medium text-lg">{product.name}</h1>
                <h1 className="text-normal text-slate-600 text-md">
                  ${product.price}
                </h1>
              </div>
              <button onClick={() => dispatch({type: 'add_to_cart'})} className="w-full text-center px-6 py-1 bg-[#f57224] my-1 ">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
