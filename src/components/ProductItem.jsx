import React from "react";

const ProductItem = ({ product }) => {
  return (
    <>
      <div className="p-2 rounded-lg border border-slate-300 grid gap-1">
        <div className="rounded-md overflow-hidden ">
          <img src={product.productImage} alt="" className="w-full aspect-[16/9] object-contain" />
        </div>
        <p className="font-semibold mt-2">{product.productName}</p>
        <span className="text-slate-600">${product.price}</span>
        <button className="bg-blue-600 text-white p-2 rounded-md ">Add Card</button>
      </div>
    </>
  );
};

export default ProductItem;
