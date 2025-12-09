import StudentCard from "./components/StudentCard";
import ProductCard from "./components/ProductCard";
import Shoes from "./assets/image/productShoes.png";
import Counter from "./components/Counter";
import Quote from "./components/Quote";
import Form from "./components/Form";
import PropsChildExample from "./components/PropsChildExample";
import ProductList from "./components/ProductList";
import { useState } from "react";


function App() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <>
      <h1>Welcome</h1>

      {/* Toggle Products */}
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}

      <StudentCard />
      <ProductCard
        productName="Shoes"
        price="79,9"
        rating="4.8"
        image={Shoes}
      />

      <Counter />
      <Quote />
      <Form />
      <PropsChildExample />
      
    </>
  );
}


export default App;
