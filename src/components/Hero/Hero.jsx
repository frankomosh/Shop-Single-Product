import React from 'react';
import { Link } from 'react-router-dom';
//import Herobg from '../../images/hero-bg.png';
import Logo from '../../images/icons/logo.svg';
import LeftArrow from '../../images/icons/left-arrow.png'
import './hero.css';


export default function Hero() {
  
   

  return (
    <div className='hero'>
     <div className="hero-bg"></div>
      <div className="hero-content">
        <img src={Logo} alt="Logo" />
      
        <h1>Shop</h1>
       <div className='hero-title'>
        
       <Link to='/'>
       <h4 className='title1'>Home</h4>
       </Link>
    
        <img src={LeftArrow} alt='arrow'/>
       <Link to='/'>
       <p className='title2'>Shop</p>
      
       </Link> 
       
       </div>
      </div>
    </div>
  );
}
