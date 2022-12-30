import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-14 py-4 shadow-sm shadow-slate-200">
        <div>
          <h1 className="font-bold text-xl text-[#f57224]">BDExpress</h1>
        </div>
        <nav>
          <ul>
            <li>
              <i class="fas fa-cart-plus text-slate-900 text-xl"></i>{" "}
              <span class="bg-[#f57224] px-1 rounded-full mb-3 text-sm text-white">
                0
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
