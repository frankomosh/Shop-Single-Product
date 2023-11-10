import React from 'react';
import FaceBook from "../../images/icons/facebook.png";
import LinkedIn from "../../images/icons/linkedIn.png";
import Twitter from "../../images/icons/twitter.png";
import './footer.css';


export default function Footer() {
  return (
    <footer className='footer' >
    <div className='footer-section'>
      <div className='sku'>
        <p>SKU </p>
        <p>: SS001</p>

      </div>
      <div  className='category'>
        <p>Category </p>
        <p>: Sofas</p>
       
      </div>
      <div className='tags'>
        <p>Tags</p>
        <p>: Sofa, Chair, Home, Shop</p>
       
      </div>
      <div className='share'>
        <p>Share</p>
        <div className='icons'>
          <p>:</p>
          <img src={FaceBook} alt="FaceBook" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  </footer>
  );
}
