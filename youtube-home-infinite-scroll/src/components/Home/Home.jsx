import './Home.scss';

import React, { useEffect, useState } from 'react'

import { useFetchVideos } from '../../hooks/useFetchVideos';

const Home = () => {
  const [nextPageToken, setNextPageToken] = useState('');
  const response = useFetchVideos(nextPageToken);

  console.log('response', response);

  return (
    <div>
      Videos
    </div>
  )
}

export default Home