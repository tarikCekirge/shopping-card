import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import SideBar from "./components/SideBar";

import { PRODUCTS } from "./products";

function App() {
  const [isSideOpen, SetIsSideOpen] = useState(false);
  return (
    <>
      <div className="App">
        <Header SetIsSideOpen={SetIsSideOpen} isSideOpen={isSideOpen} />
        <Products PRODUCTS={PRODUCTS} />
        <SideBar isSideOpen={isSideOpen} SetIsSideOpen={SetIsSideOpen} />
      </div>
    </>
  );
}

export default App;
