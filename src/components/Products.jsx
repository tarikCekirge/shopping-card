import React from "react";
import ProductItem from "./ProductItem";

const Products = (props) => {
  const productList = props.PRODUCTS;
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-card gap-4 p-3">
            {productList.map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
