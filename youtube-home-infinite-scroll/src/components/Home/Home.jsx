import './Home.scss';

import React, { useCallback, useRef, useState } from 'react'

import { useFetchVideos } from '../../hooks/useFetchVideos';

const Home = () => {
  const [nextPageToken, setNextPageToken] = useState('');
  const {
    videos, 
    loading,
    error,
    nextPageToken: token
  } = useFetchVideos(nextPageToken);

  const observer = useRef();
  const lastVideoElementRef = useCallback(node => {
    if (loading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && token) {
        setNextPageToken(token);
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  }, [loading, token])

  return (
    <div>
      {videos.map((video, index) => {
        if (index === videos.length - 1) {
          return (
            <div key={index} ref={lastVideoElementRef}>
              {video?.snippet?.title}
            </div>
          );
        }
        else {
          return (
            <div key={index}>
              {video?.snippet?.title}
            </div>
          );
        }
      })}
      {error && <div>Oops! Something went wrong</div>}
      {loading && <div>Loading</div>}
    </div>
  )
}

export default Home