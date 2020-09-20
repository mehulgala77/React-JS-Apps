
import React from 'react'
import VideoRow from './VideoRow'
import { useFetchSingleVideoDetails } from '../hooks/useFetchSingleVideoDetails'
import { useFetchRelatedVideos } from '../hooks/useFetchRelatedVideos'

import '../styles/SingleVideo.css'

function SingleVideo({match}) {

    const videoId = match.params.videoId

    const video = useFetchSingleVideoDetails(videoId)
    const relatedVideos = useFetchRelatedVideos(videoId)

    if (!Object.keys(video).length) {
        return null
    }

    const videoEmbedURL = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="singleVideo">
            <div className="singleVideo__details">
                <div className="singleVideo__details_container">
                    <div className="singleVideo__embed">
                        <iframe 
                            className="singleVideo__iframe" 
                            title="My Video" 
                            src={videoEmbedURL}                         
                        />
                    </div>
                    <h4 className="singleVideo__title">{video.snippet.localized.title}</h4>
                    <p className="singleVideo__channel">{video.snippet.channelTitle}</p>                    
                </div>
            </div>
            <div className="singleVideo__relatedvideos">
                <h2>Related Videos</h2>
                <div>
                    {relatedVideos.map( video => (
                        <VideoRow 
                            title={video.snippet.title}
                            channel={video.snippet.channelTitle}
                            image={video.snippet.thumbnails.high.url}
                            key={video.id.videoId}
                            videoId={video.id.videoId}
                            small
                        /> 
                    ))}
                    {/* Only for testing */}
                    {/* <VideoRow 
                        channel="ICC"
                        title="Virat Kohli - World Number 1 | India Player Feature | ICC Cricket World Cup 2019"
                        image="https://i.ytimg.com/vi/lvtEVsiwbZw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCysS5jtgVxD1lPE67z-iaZE5K6rQ"                                                                                                    
                        small
                    />
                    <VideoRow 
                        channel="ICC"
                        title="Virat Kohli - World Number 1 | India Player Feature | ICC Cricket World Cup 2019"
                        image="https://i.ytimg.com/vi/lvtEVsiwbZw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCysS5jtgVxD1lPE67z-iaZE5K6rQ"                                                                                                    
                        small
                    />
                    <VideoRow 
                        channel="ICC"
                        title="Virat Kohli - World Number 1 | India Player Feature | ICC Cricket World Cup 2019"
                        image="https://i.ytimg.com/vi/lvtEVsiwbZw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCysS5jtgVxD1lPE67z-iaZE5K6rQ"                                                                                                    
                        small
                    />
                    <VideoRow 
                        channel="ICC"
                        title="Virat Kohli - World Number 1 | India Player Feature | ICC Cricket World Cup 2019"
                        image="https://i.ytimg.com/vi/lvtEVsiwbZw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCysS5jtgVxD1lPE67z-iaZE5K6rQ"                                                                                                    
                        small
                    /> */}
                    </div>
            </div>
        </div>
    )
}

export default SingleVideo