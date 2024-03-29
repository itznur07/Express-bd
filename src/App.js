import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Carts from './Components/Carts';
import Navbar from "./Components/Navbar";
import NotFound from './Components/NotFound';
import Product from "./Components/Product";
import CartContextProvider from './Context/CartContextProvider';
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Carts />} />
        <Route path='*'  element={<NotFound/>} />
      </Routes>
      </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
