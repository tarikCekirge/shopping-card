import React, { useContext } from "react";
import BasketItem from "./BasketItem";
import { IoMdClose } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { MyContext } from "../context/MyContext";

const SideBar = ({ cart, removeCart, isSideOpen, SetIsSideOpen }) => {
  const { myState, SetMyState } = useContext(MyContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  if (cart.length === 0) {
    return;
  }
  return (
    <>
      <div className={`fixed ${isSideOpen ? " right-0" : "-right-[400px]"} top-0 w-[400px] h-screen bg-white p-3 shadow-2xl  transition-all ease-linear duration-150`}>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl text-blue-600">{myState}</h3>
          <button onClick={() => SetIsSideOpen(false)}>
            <IoMdClose className="text-2xl text-gray-600" />
          </button>
        </div>
        <div className="grid gap-3 py-4 border-b border-gray-200 mb-4">
          {cart.map((item) => (
            <BasketItem item={item} key={item.id} />
          ))}
        </div>
        <div className="mb-3 flex items-center justify-between text-sm font-semibold text-gray-600">
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <button onClick={removeCart} className="bg-red-500 hover:bg-red-600 transition-colors text-white font-bold text-center p-2 rounded-lg w-full flex items-center justify-center gap-3">
          Remove Basket <FaRegTrashAlt className="text-white" />
        </button>
      </div>
    </>
  );
};

export default SideBar;
