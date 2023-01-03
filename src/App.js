import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Bannar from "./Components/Bannar";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
      <Navbar />
      <Bannar />
      <Routes>
        <Route path='/' element={<Product />} />
      </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
