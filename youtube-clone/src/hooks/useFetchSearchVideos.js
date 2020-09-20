
import { key } from '../config/youtube'

export const usefetchSearchVideos = async (searchTerm, noOfVideos = 10 ) => {

    const baseURL = 'https://www.googleapis.com/youtube/v3/search?'
    const part = 'snippet'
    const type = 'video'
    const maxResults = noOfVideos
    const q = searchTerm

    const params = new URLSearchParams({
        part,
        key,
        type,
        maxResults,
        q
    })

    const response = await fetch(baseURL + params)
    const data = await response.json()
    return data.items
}