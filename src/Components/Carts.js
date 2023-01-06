import React, { useContext } from "react";
import { cartContext } from "../Context/CartContextProvider";

const Carts = () => {
  const { cart } = useContext(cartContext);
  const { shoppingCart, totalPrice, qty } = cart;

  return (
    <>
      <div className='mx-14 mt-24'>
        <div className='flex flex-col items-center justify-center border border-[#fafafa] rounded-md'>
          {shoppingCart.length > 0
            ? shoppingCart.map((product) => <div className="my-5 flex items-center bg-white py-3 px-5" key={product.id}>
              <span className="inline-block"><img className="cursor-pointer inline w-20 rounded-sm" src={product.image} alt="not-found" /></span>
              <span className="ml-6 inline-block pr-4">{product.name}</span>
              <span className="text-center text-[#f57224] mx-6 text-lg">${product.price}</span>
              <span><i className="fas fa-minus border cursor-pointer  px-2 py-1 border-[#f57224] mx-3 text-sm text-[#f57224] inline-block"></i></span>
              <span>{product.qty}</span>
              <span><i className="fas fa-plus border px-2 py-1 border-[#f57224] mx-3 cursor-pointer text-sm text-[#f57224] inline-block"></i></span>
              <span className="text-[#f57224] mx-6 text-lg block">$500.0</span>
              <span><i className="fas fa-trash-alt cursor-pointer text-[#f57224] inline-block mx-6 text-lg"></i></span>
            </div>)
            : "Your Cart Currently empty"}
        </div>
      </div>
    </>
  );
};

export default Carts;

// {shoppingCart.map((product) => (
//   <div key={product.id}>
//     <div className='flex items-center space-x-52 space-y-14'>
//       {/* Cart img and name section */}
//       <div className='flex items-center space-x-2'>
//         <img
//           className='w-14 rounded-sm'
//           src={product.image}
//           alt='cart-img'
//         />
//         <h1>{product.name}</h1>
//       </div>

//       {/* Cart qty section */}
//       <div className='flex items-center space-x-4 cursor-pointer'>
//         <button className='px-4 py-1 bg-black text-xl text-white'>
//           -
//         </button>
//         <p>{product.qty}</p>
//         <button className='px-4 py-1 bg-black text-xl text-white'>
//           +
//         </button>
//       </div>

//       {/* Remove cart button */}
//       <div>
//         <button className='text-sm'>❌</button>
//       </div>

//       {/* Product Price section */}
//       <div>
//         <p>${product.price}</p>
//       </div>
//     </div>
//   </div>
// ))}
