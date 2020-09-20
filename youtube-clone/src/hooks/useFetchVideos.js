
import { useState, useEffect } from 'react'

import { shuffle } from '../utils/shuffle'

import { usefetchSearchVideos } from '../hooks/useFetchSearchVideos'

export const useFetchRecommendedVideos = () => {

    const [videos, setVideos] = useState([])

    const fetchRecommendedVideos = async () => {
        const p1 = usefetchSearchVideos('cricket')        
        const p2 = usefetchSearchVideos('bollywood')        
        const p3 = usefetchSearchVideos('modi')  
        
        try {
            const results = await Promise.all([p1, p2, p3])

            const newVideos = results.reduce((total, curr) => {
                return [...total, ...curr]
            }, [])

            setVideos(shuffle(newVideos))

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchRecommendedVideos()        
    }, [])

    return videos
}