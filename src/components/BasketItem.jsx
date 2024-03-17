import React from "react";

const BasketItem = (props) => {
  const { productName, price, productImage } = props.item;
  return (
    <>
      <div className="flex items-center justify-start gap-3 text-sm text-gray-600">
        <img src={productImage} alt={productName} className="size-6" />
        <span>{productName}</span>
        <span className="ml-auto">{price}</span>
      </div>
    </>
  );
};

export default BasketItem;
