import React from "react";
import BasketItem from "./BasketItem";
import { IoMdClose } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <>
      <div className="fixed right-0 top-0 w-[400px] h-screen bg-white p-3 shadow-2xl ">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl text-blue-600">Basket</h3>
          <button>
            <IoMdClose className="text-2xl text-gray-600" />
          </button>
        </div>
        <div className="grid gap-3 py-4 border-b border-gray-200 mb-4">
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </div>
        <button className="bg-red-500 hover:bg-red-600 transition-colors text-white font-bold text-center p-2 rounded-lg w-full flex items-center justify-center gap-3">
          Remove Basket <FaRegTrashAlt className="text-white" />
        </button>
      </div>
    </>
  );
};

export default SideBar;
