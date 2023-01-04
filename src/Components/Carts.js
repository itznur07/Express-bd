import React, { useContext } from "react";
import { cartContext } from "../Context/CartContextProvider";

const Carts = () => {
  const { cart } = useContext(cartContext);
  const { shoppingCart, totalPrice, qty } = cart;

  return (
    <>
      <div className='mx-14 mt-8'>
        <h1 className='text-center text-3xl font-medium space-y-16'>
          Shopping Cart
        </h1>
        <div className='flex place-items-center justify-center'>
          <div className='flex flex-col'>
            {shoppingCart.map((product) => (
              <div key={product.id}>
                <div className='flex items-center space-x-52 space-y-14'>
                  {/* Cart img and name section */}
                  <div className='flex items-center space-x-2'>
                    <img
                      className='w-14 rounded-sm'
                      src={product.image}
                      alt='cart-img'
                    />
                    <h1>{product.name}</h1>
                  </div>

                  {/* Cart qty section */}
                  <div className='flex items-center space-x-4 cursor-pointer'>
                    <button className='px-4 py-1 bg-black text-xl text-white'>
                      -
                    </button>
                    <p>{product.qty}</p>
                    <button className='px-4 py-1 bg-black text-xl text-white'>
                      +
                    </button>
                  </div>

                  {/* Remove cart button */}
                  <div>
                    <button className='text-sm'>❌</button>
                  </div>

                  {/* Product Price section */}
                  <div>
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Total Price Sections */}

          <div className='space-y-6 text-right text-xl font-semibod'>
            <hr />
            <h1 className='mr-8'>Total Price: {totalPrice}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
