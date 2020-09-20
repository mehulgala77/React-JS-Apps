
import React from 'react'
import '../styles/VideoRow.css'

function VideoRow({
    views, 
    subs,
    desc, 
    channel,
    title,
    image,
    timestamp
}) {
    return (
        <div className="videoRow">
            <img src={image} alt="video thumbnail"/>
            <div className="videoRow__text">
                <h3>{title}</h3>
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
        </div>
    )
}

export default VideoRow
