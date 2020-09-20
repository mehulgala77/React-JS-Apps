
import { useState, useEffect } from 'react'
import { key } from '../config/youtube'

export const useFetchRelatedVideos = (relatedToVideoId, noOfVideos = 6) => {

    const [videos, setVideos] = useState([])

    const fetchRelatedVideos = async relatedToVideoId => {

        const baseURL = 'https://www.googleapis.com/youtube/v3/search?'
        const part = 'snippet'
        const type = 'video'
        const maxResults = noOfVideos
    
        const params = new URLSearchParams({
            part,
            key,
            type,
            maxResults,
            relatedToVideoId
        })
    
        try {
    
            const response = await fetch(baseURL + params)
            const data = await response.json()
            setVideos(data.items)
    
        } catch (err) {
            console.error(err);
        }

    }

    useEffect(() => {
        fetchRelatedVideos(relatedToVideoId)
    }, [relatedToVideoId])

    return videos
}