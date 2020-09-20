
import React from 'react'

import { Avatar } from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

import '../styles/ChannelRow.css'

function ChannelRow({
    image,
    name,
    verified,
    subs,
    videos,
    desc
}) {
    return (
        <div className="channelRow">
            <Avatar 
                className="channelRow__logo" 
                src={image}
                alt={name}
            />

            <div className="channelRow__text">
                <h4>{name} {verified && <VerifiedIcon />}</h4>
                <p className="channelRow__meta">
                    {subs} subscribers &#9679; {videos} videos
                </p>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
