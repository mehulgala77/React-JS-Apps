import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>My Small Apps</h1>

      <ul>
        <Link to='/pagination'>Pagination</Link>
      </ul>
      <ul>
        <Link to='/api-debounce'>API Debounce</Link>
      </ul>
    </>
  );
}

export default Home;
