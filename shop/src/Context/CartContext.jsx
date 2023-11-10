import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
const [cart, setCart] = useState([]) ; 
// const addToCart = (product, id) => {
//     console.log(product);
//     console.log(`${product.name} added to cart`);
// } 
const addToCart = (product, selectedSize, selectedColor, quantity) => {
    const itemInCart = cart.find(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
        
    );
    if (itemInCart) {
        // If the item is already in the cart, update the quantity
        const updatedCart = cart.map((item) => {
          if (
            item.product.id === product.id &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
          ) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          } else {
            return item;
        }
    });
    setCart(updatedCart);
  } else {
    // If the item is not in the cart, add it
    setCart([
      ...cart,
      {
        product: product,
        selectedSize: selectedSize,
        selectedColor: selectedColor,
        quantity: quantity,
      },
    ]);
  }
};

const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(
      (item) =>
        !(
          item.product.id === itemToRemove.product.id &&
          item.selectedSize === itemToRemove.selectedSize &&
          item.selectedColor === itemToRemove.selectedColor
        )
    );
    setCart(updatedCart);
  };
return(
<CartContext.Provider value={{cart, addToCart, removeFromCart}}>
{children}
</CartContext.Provider>
)

};

export default CartProvider;

