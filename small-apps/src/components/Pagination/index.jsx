import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Posts from './Posts';
import Pagination from './Pagination';

function PaginationDemo() {

  const postsPerPage = 10;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>
        My Blog
      </h1>
      <Posts 
        posts={currentPosts} 
        loading={loading}           
      />
      <Pagination 
        paginate={paginate}
        postsPerPage={postsPerPage} 
        totalPosts={posts.length}         
      />
    </div>
  );
}

export default PaginationDemo;
