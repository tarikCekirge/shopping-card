import React from "react";

const CartItem = ({ product, cart, setCart }) => {
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    setCart((prevState) => [...prevState, product]);
  };
  return (
    <>
      <div className="p-2 rounded-lg border border-slate-300 grid gap-1">
        <div className="rounded-md overflow-hidden ">
          <img src={product.productImage} alt="" className="w-full aspect-[16/9] object-contain" />
        </div>
        <p className="font-semibold mt-2">{product.productName}</p>
        <span className="text-slate-600">${product.price}</span>
        <button disabled={findProduct} className="bg-blue-600 text-white p-2 rounded-md disabled:bg-blue-100 disabled:cursor-auto" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default CartItem;
