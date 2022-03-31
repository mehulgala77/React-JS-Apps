import React, { useEffect, useState } from 'react';
import _ from 'lodash';

function APIDebounce() {
  const [searchTerm, setSearchTerm] = useState('');
  const [post, setPost] = useState(0);

  const sendRequest = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const random = Math.random();
    const randomIndex = Math.floor(random * data.length);

    setPost(data[randomIndex]);
  };

  const memoizedSendRequest = React.useCallback(_.debounce(sendRequest, 400), []);

  useEffect(() => {
    memoizedSendRequest();
  }, [searchTerm, memoizedSendRequest]);

  const searchBox = () => (
    <>
      <input 
        onChange={e => setSearchTerm(e.target.value)}
        type='text'
        value={searchTerm}
      />
      <h3>Post: {post.title}</h3>
    </>
  );

  return <div>
    {searchBox()}
  </div>;
}

export default APIDebounce;
