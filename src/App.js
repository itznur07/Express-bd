import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Carts from './Components/Carts';
import Navbar from "./Components/Navbar";
import NotFound from './Components/NotFound';
import Product from "./Components/Product";
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Carts />} />
        <Route path='*'  element={<NotFound/>} />
      </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
