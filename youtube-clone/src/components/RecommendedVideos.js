
import React from 'react'
import '../styles/RecommendedVideos.css'
import VideoCard from './VideoCard'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import { useFetchRecommendedVideos } from '../hooks/useFetchVideos'

function RecommendedVideos() {

    const videos = useFetchRecommendedVideos()

    console.log(videos);

    return (
        <div className="recommendedVideos">
            <div className="recommendedVideos__container">
                <h2> <TrendingUpIcon /> Trending</h2>
                <div className="recommendedVideos__videos">

                    {videos.map(video => (
                        <VideoCard 
                            title={video.snippet.title}
                            channel={video.snippet.channelTitle}
                            image={video.snippet.thumbnails.high.url}
                            key={video.id}
                            videoId={video.id}
                        />                        
                    ))}

                    {/* This data is just for testing purpose. */}
                    {/* <VideoCard 
                        title="Neil deGrasse Tyson: 3 mind-blowing space facts | Big Think"
                        views="844K views"
                        timestamp="3 days ago"
                        channel="Big Think"
                        channelImage="https://yt3.ggpht.com/a/AATXAJx9gre39HqWVbR7yFQ9fOJNrQj2kk8R23IsdG889Q=s100-c-k-c0xffffffff-no-rj-mo"
                        image="https://i.ytimg.com/vi/dXOLJOnLKDg/hqdefault.jpg"
                    />
                    <VideoCard 
                        title=" 300th T20 | TRIBUTE to MS DHONI'S Captaincy"
                        views="2M views"
                        timestamp="5 days ago"
                        channel="ICC"
                        channelImage="https://yt3.ggpht.com/a/AATXAJwk1Uke6i5dugqomTonbectW861N9ntLJXOQBltFlM=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/1QQrcTik1qo/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="Jurassic World - Official Trailer (HD)"
                        views="1.1M views"
                        timestamp="10 days ago"
                        channel="Move Junction"
                        channelImage="https://yt3.ggpht.com/a/AATXAJxcpQ8iXP0M2f-tF9wdVvdxc25MWvcmYxQ4Rg=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/RFinNxS5KN4/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="To Jinda Ho Tum poetry!!"
                        views="707K views"
                        timestamp="25 days ago"
                        channel="T-Series"
                        channelImage="https://yt3.ggpht.com/a/AATXAJyY9jLhVGXYAyCwcO7a1dsSmfrnB9Ie0Bzr9Rum=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/5vEBHH6GKWk/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="Neil deGrasse Tyson: 3 mind-blowing space facts | Big Think"
                        views="844K views"
                        timestamp="3 days ago"
                        channel="Big Think"
                        channelImage="https://yt3.ggpht.com/a/AATXAJx9gre39HqWVbR7yFQ9fOJNrQj2kk8R23IsdG889Q=s100-c-k-c0xffffffff-no-rj-mo"
                        image="https://i.ytimg.com/vi/dXOLJOnLKDg/hqdefault.jpg"
                    />
                    <VideoCard 
                        title=" 300th T20 | TRIBUTE to MS DHONI'S Captaincy"
                        views="2M views"
                        timestamp="5 days ago"
                        channel="ICC"
                        channelImage="https://yt3.ggpht.com/a/AATXAJwk1Uke6i5dugqomTonbectW861N9ntLJXOQBltFlM=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/1QQrcTik1qo/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="Jurassic World - Official Trailer (HD)"
                        views="1.1M views"
                        timestamp="10 days ago"
                        channel="Move Junction"
                        channelImage="https://yt3.ggpht.com/a/AATXAJxcpQ8iXP0M2f-tF9wdVvdxc25MWvcmYxQ4Rg=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/RFinNxS5KN4/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="To Jinda Ho Tum poetry!!"
                        views="707K views"
                        timestamp="25 days ago"
                        channel="T-Series"
                        channelImage="https://yt3.ggpht.com/a/AATXAJyY9jLhVGXYAyCwcO7a1dsSmfrnB9Ie0Bzr9Rum=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/5vEBHH6GKWk/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="Neil deGrasse Tyson: 3 mind-blowing space facts | Big Think"
                        views="844K views"
                        timestamp="3 days ago"
                        channel="Big Think"
                        channelImage="https://yt3.ggpht.com/a/AATXAJx9gre39HqWVbR7yFQ9fOJNrQj2kk8R23IsdG889Q=s100-c-k-c0xffffffff-no-rj-mo"
                        image="https://i.ytimg.com/vi/dXOLJOnLKDg/hqdefault.jpg"
                    />
                    <VideoCard 
                        title=" 300th T20 | TRIBUTE to MS DHONI'S Captaincy"
                        views="2M views"
                        timestamp="5 days ago"
                        channel="ICC"
                        channelImage="https://yt3.ggpht.com/a/AATXAJwk1Uke6i5dugqomTonbectW861N9ntLJXOQBltFlM=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/1QQrcTik1qo/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="Jurassic World - Official Trailer (HD)"
                        views="1.1M views"
                        timestamp="10 days ago"
                        channel="Move Junction"
                        channelImage="https://yt3.ggpht.com/a/AATXAJxcpQ8iXP0M2f-tF9wdVvdxc25MWvcmYxQ4Rg=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/RFinNxS5KN4/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="To Jinda Ho Tum poetry!!"
                        views="707K views"
                        timestamp="25 days ago"
                        channel="T-Series"
                        channelImage="https://yt3.ggpht.com/a/AATXAJyY9jLhVGXYAyCwcO7a1dsSmfrnB9Ie0Bzr9Rum=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/5vEBHH6GKWk/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="Neil deGrasse Tyson: 3 mind-blowing space facts | Big Think"
                        views="844K views"
                        timestamp="3 days ago"
                        channel="Big Think"
                        channelImage="https://yt3.ggpht.com/a/AATXAJx9gre39HqWVbR7yFQ9fOJNrQj2kk8R23IsdG889Q=s100-c-k-c0xffffffff-no-rj-mo"
                        image="https://i.ytimg.com/vi/dXOLJOnLKDg/hqdefault.jpg"
                    />
                    <VideoCard 
                        title=" 300th T20 | TRIBUTE to MS DHONI'S Captaincy"
                        views="2M views"
                        timestamp="5 days ago"
                        channel="ICC"
                        channelImage="https://yt3.ggpht.com/a/AATXAJwk1Uke6i5dugqomTonbectW861N9ntLJXOQBltFlM=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/1QQrcTik1qo/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="Jurassic World - Official Trailer (HD)"
                        views="1.1M views"
                        timestamp="10 days ago"
                        channel="Move Junction"
                        channelImage="https://yt3.ggpht.com/a/AATXAJxcpQ8iXP0M2f-tF9wdVvdxc25MWvcmYxQ4Rg=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/RFinNxS5KN4/hqdefault.jpg"
                    />
                    <VideoCard 
                        title="To Jinda Ho Tum poetry!!"
                        views="707K views"
                        timestamp="25 days ago"
                        channel="T-Series"
                        channelImage="https://yt3.ggpht.com/a/AATXAJyY9jLhVGXYAyCwcO7a1dsSmfrnB9Ie0Bzr9Rum=s100-c-k-c0xffffffff-no-rj-mo"
                        image="http://i.ytimg.com/vi/5vEBHH6GKWk/hqdefault.jpg"
                    /> */}
                </div> 
            </div>
        </div>
    )
}

export default RecommendedVideos
