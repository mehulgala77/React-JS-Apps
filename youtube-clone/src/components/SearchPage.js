
import React, { useState, useEffect } from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'

import { usefetchSearchVideos } from '../hooks/useFetchSearchVideos'

import '../styles/SearchPage.css'

function SearchPage({match}) {

    const searchTerm = match.params.searchTerm
    const [videos, setVideos] = useState([])

    useEffect(() => {
        usefetchSearchVideos(searchTerm, 30)
            .then(data => setVideos(data))
            .catch(err => console.error(err))
    }, [searchTerm])

    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
            </div>

            {videos.map(video => (
                <VideoRow 
                    key={video.id.videoId}
                    videoId={video.id.videoId}
                    desc={video.snippet.description}
                    channel={video.snippet.channelTitle}
                    title={video.snippet.title}
                    image={video.snippet.thumbnails.high.url}
                />
            ))}

            {/* This data is just for testing purpose. */}
            {/* <hr />

            <ChannelRow 
                image="https://yt3.ggpht.com/a/AATXAJwk1Uke6i5dugqomTonbectW861N9ntLJXOQBltFlM=s176-c-k-c0x00ffffff-no-rj-mo"
                name="ICC"
                verified
                subs="6.9M"
                videos="2868"
                desc="This is the official ICC YouTube channel.  The ICC is the governing body of international cricket."
            /> */}

            {/* <hr /> */}

            {/* <VideoRow 
                views="115K"    
                subs="659K"
                desc="Fastest to 10,000 ODI runs. 41 ODI centuries. The No. 1 Ranked ODI batsman. Meet Virat Kohli."
                channel="ICC"
                title="Virat Kohli - World Number 1 | India Player Feature | ICC Cricket World Cup 2019"
                image="https://i.ytimg.com/vi/lvtEVsiwbZw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCysS5jtgVxD1lPE67z-iaZE5K6rQ"                                                                            
                timestamp="5 months ago"
            />

            <VideoRow 
                views="1.4M"    
                subs="659K"
                desc="Australia quick Brett Lee was the first player to claim a hat-trick in T20I cricket. Relive his exceptional performance."
                channel="ICC"
                title="Brett Lee claims first T20I hat-trick | AUS v BAN | T20WC 2007"
                image="https://i.ytimg.com/vi/hlQj_ULxoUs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLClLc2DAdGVyyzoLQMv76H5SZO27A"                                                                            
                timestamp="13 years ago"
            />

            <VideoRow 
                views="56M"    
                subs="659K"
                desc="Watch full highlights of the India vs Pakistan match at Old Trafford, Game 22 of the 2019 Cricket World Cup."
                channel="ICC"
                title="Rohit Sharma Hits 140! | India v Pakistan - Match Highlights | ICC Cricket World Cup 2019"
                image="https://i.ytimg.com/vi/AFEZzf9_EHk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcEuZjVOWkyj6GlI5jRjYr9kvE9A"                                                                            
                timestamp="1 year ago"
            />

            <VideoRow 
                views="884K"    
                subs="659K"
                desc="Mahendra Singh Dhoni – one of the greats."
                channel="ICC"
                title="A tribute to MS Dhoni"
                image="https://i.ytimg.com/vi/b4OH3vBANa4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDmh_AJCWnnXwlpdUS3Via01I-nvg"                                                                            
                timestamp="1 month ago"
            /> */}

        </div>
    )
}

export default SearchPage
