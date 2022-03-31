import React from 'react';

function Pagination({ paginate, postsPerPage, totalPosts }) {

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(page => (
          <li key={page} className='page-item'>
            <a 
              href="!#" 
              className='page-link'
              onClick={(e) => {
                e.preventDefault();
                paginate(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
