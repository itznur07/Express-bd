import React, { useContext } from 'react';
import { cartContext } from '../Context/CartContextProvider';

const Carts = () => {
  
  const data = useContext(cartContext)
  console.log(data);

  return (
    <>
      <h1>React Cart Components</h1>
    </>
  )
}


export default Carts;