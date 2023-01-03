import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                0
              </span>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
