import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Person from '../../images/icons/vector1.svg';
import Heart from '../../images/icons/vector3.svg';
import Search from '../../images/icons/vector2.svg';
import Vector from '../../images/icons/Vector.svg';
import Logo from '../../images/icons/logo.svg';
//import  {CartContext} from '../../Context/CartContext';


const Nav = styled.nav`
    width:100%;
   // max-width: 1440px;
    margin:0 auto;
    height:100px;
    display:flex;
    justify-content: space-between; 
    align-items: center;
   
   
`;


const Navlink = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap:20px;
`;


const NavIcon = styled.div`
display:flex;
gap:20px;
`;






export default function Navbar() {
    // const { cart } = useContext(CartContext); // Use cart and removeFromCart from CartContext
    return (
        <Nav >
           <Link to='/'>
           <img src={Logo} alt='logo'/>
           </Link>
                
          
           <Navlink>
           <Link to='/' >Home</Link>
                <Link to='Shop'>Shop</Link>
                <Link to='About' >About</Link>
                <Link to='Contact' >Contact</Link>
           </Navlink>
              
          
            <NavIcon>
                <Link>
                    <img src={Person} alt='person' />
                </Link>

                <Link>
                    <img src={Search} alt='search' />
                </Link>

                <Link>
                    <img src={Heart} alt='heart' />
                </Link>

                <Link to='/Cart'>
                
 <img src={Vector} alt='cart' />
                 
                   
                </Link>

            </NavIcon>
        </Nav>
    );
}
