import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContextProvider';


const Navbar = () => {
  
  const {cart} = useContext(cartContext)
  const {shoppingCart} = cart

  return (
    <>
      <div className="flex items-center justify-between px-14 py-4 shadow-sm shadow-slate-200">
        <div>
          <Link to="/" className="font-bold text-xl text-[#f57224]">BDExpress</Link>
        </div>
        <nav>
          <ul>
            <Link to='/cart'>
              <i className="fas fa-cart-plus text-slate-900 text-xl"></i>{" "}
              <span className="bg-[#f57224] px-1 rounded-full mb-3 text-sm text-white">
                {shoppingCart.length}
              </span>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
