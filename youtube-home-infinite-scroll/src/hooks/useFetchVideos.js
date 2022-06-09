import { useEffect, useState } from 'react';

import axios from 'axios';
import mockVideos from '../mocks/mockVideos.json';

export const useFetchVideos = (token) => {

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nextPageToken, setNextPageToken] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      const baseURL = 'https://www.googleapis.com/youtube/v3/search?';
      const part = 'snippet';
      const type = 'video';
      const maxResults = 30;
      const q = 'programming';
      const key = process.env.REACT_APP_YOUTUBE_API_KEY;
      const pageToken = token || "";
    
      const params = {
        part,
        key,
        type,
        maxResults,
        q,
      };
    
      if (pageToken) {
        params.pageToken = pageToken;
      }

      try {
    
          setLoading(true);
          setError(false);

          // Note: Youtube API has very low daily usage quota. 
          // And a single search request takes substantial chunk from the quota. 
          // Hence writing this mock to reduce dependency on the actual API.

          const response = {
            data: mockVideos
          };

          // const response = await axios.get(baseURL, { params });     
    
          setVideos(prevVideos => {
            return [...prevVideos, ...response.data.items];
          });

          const random = String(Math.floor(Math.random() * 10000));
          setNextPageToken(response.data.nextPageToken + random);
          setError(false);
    
      } catch (err) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();

  }, [token]);
  
  return {
    error,
    loading,
    nextPageToken,
    videos,
  }
}