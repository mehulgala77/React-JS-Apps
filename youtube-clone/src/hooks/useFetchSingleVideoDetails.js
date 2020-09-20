
import { useState, useEffect } from 'react'

import { key } from '../config/youtube'

export const useFetchSingleVideoDetails = (videoId) => {

    const [video, setVideo] = useState({})

    const fetchSingleVideoDetails = async (videoId) => {

        const baseURL = 'https://www.googleapis.com/youtube/v3/videos?'
        const part = 'snippet'
        const id = videoId
        
        const params = new URLSearchParams({
            part,
            key,
            id
        })

        try {

            const response = await fetch(baseURL + params)
            const data = await response.json()

            console.log(data);
            if(data.items && data.items.length > 0) {
                setVideo(data.items[0])
            }

        } catch (err) {
            console.error(err)
        } 

    }

    useEffect(() => {
        fetchSingleVideoDetails(videoId)
    }, [videoId])

    return video
}