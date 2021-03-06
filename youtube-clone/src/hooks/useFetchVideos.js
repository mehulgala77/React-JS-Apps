
import { useState, useEffect } from 'react'

import { key } from '../config/youtube'

export const useFetchRecommendedVideos = () => {

    const [videos, setVideos] = useState([])

    const fetchRecommendedVideos = async () => {

        const baseURL = 'https://www.googleapis.com/youtube/v3/videos?'
        const part = 'snippet'
        const maxResults = 30
        const chart = 'mostPopular'
        const regionCode = 'in'

        const params = new URLSearchParams({
            part,
            key,
            chart,
            maxResults,
            regionCode
        })

        try {

            const response = await fetch(baseURL + params)
            const data = await response.json()
            setVideos(data.items)

        } catch (err) {
            console.error(err)
        }        
    }

    useEffect(() => {
        fetchRecommendedVideos()        
    }, [])

    return videos
}