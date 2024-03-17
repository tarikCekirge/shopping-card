import Header from "./components/Header";
import Products from "./components/Products";
import { PRODUCTS } from "./products";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Products PRODUCTS={PRODUCTS} />
      </div>
    </>
  );
}

export default App;
