import React, { useEffect } from 'react';
import './pagination.css';



function Pagination({ currentPage, totalPages, onPageChange }) {
 
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={i === currentPage }
      >
        {i}
      </button>
    );
  }

    // Scroll to the top of the product grid when the page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className="pagination">
          <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* <button style={{background:'none'}}> {currentPage} of {totalPages}</button> */}
        {paginationButtons}
      
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        </div>
    );
}

export default Pagination;