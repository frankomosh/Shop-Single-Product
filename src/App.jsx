import React from 'react';
import './App.css';

import Home from './Pages/Home/Home';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import { BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import CartProvider from './Context/CartContext';
import Cart from './Pages/Cart/Cart';



export default function App() {
  return (
    <div className='body'>
 <CartProvider >
 <Router>
<Navbar/>
<Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop/:id' element={<SingleProduct/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      {/*
      <Route path='contact' element={<Contact/>}></Route>

     
       */}

    </Routes>
    </Router>
    </CartProvider>
   
    </div>
   

   
  );
}





