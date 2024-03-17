import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Products = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const productList = props.PRODUCTS;
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-cart gap-4 p-3">
            {productList.map((product) => (
              <CartItem key={product.id} product={product} cart={cart} setCart={setCart} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
