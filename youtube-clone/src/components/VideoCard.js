
import React from 'react'

import '../styles/VideoCard.css'

import Avatar from '@material-ui/core/Avatar'

function VideoCard({ image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
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
        </div>
    )
}

export default VideoCard