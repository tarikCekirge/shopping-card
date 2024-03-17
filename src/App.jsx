import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import SideBar from "./components/SideBar";

import { PRODUCTS } from "./products";

function App() {
  const [cart, setCart] = useState([]);
  const [isSideOpen, SetIsSideOpen] = useState(false);
  const removeCart = () => {
    setCart([]);
  };
  return (
    <>
      <div className="App">
        <Header cart={cart} SetIsSideOpen={SetIsSideOpen} isSideOpen={isSideOpen} />
        <Products PRODUCTS={PRODUCTS} cart={cart} setCart={setCart} />
        <SideBar cart={cart} removeCart={removeCart} isSideOpen={isSideOpen} SetIsSideOpen={SetIsSideOpen} />
      </div>
    </>
  );
}

export default App;
