import React from "react";
import CartItem from "./CartItem";

const Products = (props) => {
  const productList = props.PRODUCTS;
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-cart gap-4 p-3">
            {productList.map((product) => (
              <CartItem key={product.id} product={product} cart={props.cart} setCart={props.setCart} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
