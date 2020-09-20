
import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/VideoCard.css'

import Avatar from '@material-ui/core/Avatar'

function VideoCard({ image, title, channel, views, timestamp, channelImage, videoId}) {

    return (
        <div className="videoCard">
            <Link to={`/video/${videoId}`} className="videoCard__Link">
                <img className="videoCard_thumbnail" src={image} alt="video" />
                <div className="videoCard__info">
                    {/* <Avatar className="videoCard__avatar" src={channelImage} alt={channel} /> */}
                    <div className="videoCard__text">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        {/* <p>
                            {views} &#9679; {timestamp}
                        </p> */}
                    </div>
                </div>
            </Link>
        </div>        
    )
}

export default VideoCard