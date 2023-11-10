import React, { useContext, useState } from 'react';
import products from '../../products';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import LeftArrow from '../../images/icons/left-arrow.png';
import Heart from '../../images/icons/heart2.png';
import Rating from '../../components/Icons/Ratings';
import  { CartContext } from '../../Context/CartContext';
import './colors.css';
import './size.css';
import './addToCart.css';
import './productDetail.css';
import Footer from '../../components/Footer/Footer';
//  import Line from '../images/hr.png';


const ProductView = styled.div`
width:100%;
max-width:1440px;
display:grid;
grid-template-columns: 1fr 2fr;
//margin:0 auto;
padding:10px 20px


`

const ProductImage = styled.div`

width: 481px;
height:391px;
background: #FFF9E5;
border-radius:10px;
`

const ProductDetail = styled.div`
grid-column: span 2;
margin-left:40px;
height: 600px;
//border:2px solid red;

`

const Breadcrumbs = styled.div`
grid-column: span 3;
display: flex;
margin: 30px 0px;
gap:20px;
 color:#9F9F9F;

`

export default function SingleProduct() {

  const { id } = useParams();
  console.log(id);
  // declare variable for products array
  const product = products.find((product) => product.id === parseInt(id, 10));
  if (!product) {
    return <div>product not found</div>;
  }

  // set useState for size
  const [selectedSize, setSelectedSize] = useState('');
  const handleSizeClick = (size) => {
    if (selectedSize === size) {
        // Deselect the size if it's already selected
        setSelectedSize(null);
    } else {
        // Select the size when clicked
        setSelectedSize(size);
    }
};

// set useState for color 
  const [selectedColor, setSelectedColor] = useState('');
  const handleColorClick = (color) => {
    if (selectedColor === color) {
        // Deselect the color if it's already selected
        setSelectedColor(null);
    } else {
        // Select the color when clicked
        setSelectedColor(color);
    }
};


//set state for quantity
const [quantity, setQuantity] = useState(1);

const increaseQuantity = () => {
    setQuantity(quantity + 1);
};

const decreaseQuantity = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
};

  // addToCart Context
  const {addToCart} = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedToCart(true);
  };
  

  
  return (
    <ProductView>
      <Breadcrumbs>
        <Link to='/'>
          <p >Home</p>
        </Link>
        <img src={LeftArrow} alt='arrow' />
        <Link to='/'>
          <p >Shop</p>
        </Link>
        <img src={LeftArrow} alt='arrow' />
        {/* <img src={Line} alt='line'/> */}
        <p >{product.name}</p>
      </Breadcrumbs>

      <ProductImage >
        <img 
        src={product.image} 
        alt={product.name} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain', 
          objectPosition:'center'}} />
      </ProductImage>

      <ProductDetail>
      <p className='product-title' >{product.name}</p>

      <div className='product-price' >
      <p >RS.{product.price}</p>
      <img width='25px' height='10.63px' src={Heart} alt='heart'/>
      </div>
    
      <div className='product-rating' >
      <Rating/>
      <p  >5 customer reviews</p>
      </div>
     
      <p className='product-desc'>
        
        Setting the bar as one of the loudest speakers in its class, the
        Kilburn is a compact, stout-hearted hero with a well-balanced
        audio which boasts a clear midrange and extended highs for a
        sound.
              
      </p>

      <div className='sizes-container'>
      <p className='title1'>Size</p>
      <div className='size-options'>
        {product.sizes.map((size, index) => (
          <button
            key={index}
            className={selectedSize === size ? 'selected' : ''}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
        </div>
      </div>

      <div className='colors-container'>
      <p className='title2'>Color</p>
      <div className='color-options'>
      {product.colors.map((color, index) => (
          <button
            key={index}
            //onClick={() => setSelectedColor(color)}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
          >
            {color}
          </button>
        ))}
      </div>
       
      </div>
    
        <div className='add-to-cart'>
        <div className="quantity">
                <p onClick={decreaseQuantity}>-</p>
                <span>{quantity}</span>
                <p onClick={increaseQuantity}>+</p>
            </div>
         <div>
          <Link to='/Cart'>
          <button className='add' onClick={handleAddToCart}>Add To Cart</button>
          </Link>
        
          </div>   
       
        </div>

        <hr className='hr'/>

        <Footer/>
      
      </ProductDetail>
      
    </ProductView>
  );
}
