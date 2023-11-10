import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import products from '../../products';
import Hero from '../../components/Hero/Hero';
import Pagination from '../../components/Pagination/Pagination';



const Product = styled.ul`
width:100%;
max-width:1240px;
display:grid;
grid-template-columns: repeat(4, 1fr);
gap:10px;
padding:10px 40px;
margin:0 auto;
 justify-content:center;
 align-items:center;
text-align:center;
`


const TitleOne = styled.h3`
font-size: 16px;
font-weight: 400;
line-height: 24px;

`
const TitleTwo = styled.p`
font-size: 18px;
font-weight: 500;

`
function Home() {
  const productsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products?.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


    return (
      <div>
        <Hero/>

<Product>
          {currentProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/shop/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <TitleOne>{product.name}</TitleOne>
              <TitleTwo><b>RS. {product.price}</b></TitleTwo>
              </Link>
             
            </li>
          ))}
        </Product>

       
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button> {currentPage} of {totalPages}</button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
      
      </div>
    );
  }
  
  export default Home;