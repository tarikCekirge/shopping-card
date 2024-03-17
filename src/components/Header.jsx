import React from "react";
import SideBar from "./SideBar";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <section className="border-b border-b-slate-200 bg-slate-100">
        <div className="container">
          <div className="flex items-center justify-between p-3">
            <h1 className="text-xl font-bold">React Shopping Card</h1>
            <button className="relative p-2">
              <FaShoppingCart className="text-2xl text-gray-800" />
              <span className="bg-orange-600 text-white text-xs flex items-center justify-center  size-4 rounded-full absolute right-0 top-0">0</span>
            </button>
            <SideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
