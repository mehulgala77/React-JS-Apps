
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/VideoRow.css'

function VideoRow({
    views, 
    subs,
    desc, 
    channel,
    title,
    image,
    timestamp,
    videoId,
    small
}) {
    return (
        <div className={`videoRow ${small && 'small'}`}>
            <Link to={`/video/${videoId}`} className="videoRow__link">
                <img src={image} alt="video thumbnail"/>
                <div className="videoRow__text">
                    <h3 className="videoRow__title">{title}</h3>
                    <p className="videoRow__headline">
                        {channel}
                        {/* {channel} &#9679; {" "}
                        <span className="videoRow__subs">
                            <span className="videoRow__subsNum">
                                {subs}
                            </span> {" "}
                            Subscribers {" "}
                        </span>
                        {views} views &#9679; {timestamp} */}
                    </p>
                    <p className="videoRow__desc">
                        {desc}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default VideoRow
