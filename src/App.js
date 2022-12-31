import "./App.css";
import Bannar from "./Components/Bannar";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bannar />
      <ProductContextProvider>
        <Product />
      </ProductContextProvider>
    </div>
  );
}

export default App;
