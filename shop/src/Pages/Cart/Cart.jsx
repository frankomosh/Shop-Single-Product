

import React from 'react';
import { CartContext } from '../../Context/CartContext'; // Import useCart from CartContext
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import './cart.css';



const Cart = () => {
  const navigate = useNavigate();
  
  const { cart, removeFromCart } = useContext(CartContext); // Use cart and removeFromCart from CartContext

  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  

//   const handleCheckout = () => {
//     // Implement your checkout logic here
//     // For example, send the cart items to a server and process the payment
//   };

  return (
    <div className='cart'>
      <h3 className='cart-title'>Cart Items</h3>
     
      <div>
        {cart.map((item) => (
          <div key={item.product.id} className='cart-items'>
            <img src={item.product.image} className='cart-img'/>

            <div className='cart-desc'>
            <p><b>{item.product.name}</b></p>
              <p>Size: {item.selectedSize}</p>
              <p>Color: {item.selectedColor}</p>
              <div>
                <p>   Quantity: {item.quantity}{' '}</p>
           <p>Price: RS.{(item.quantity * item.product.price)}</p>
            <button className='remove' onClick={() => removeFromCart(item)}>Remove</button>
              </div>
             
              </div> 
             
          </div>
        ))}
      <p><b>Total Price: RS.{totalPrice.toFixed(2)}</b></p>  
      <button className='shopping' onClick={() => navigate('/')}>Continue Shopping</button>  
      </div>
    




      
    </div>
  );
};

export default Cart;
