import './Video.scss';

import React from 'react';
import ReactTooltip from 'react-tooltip';
import { formatDate } from '../../utils/dateHelper';
import threeDots from '../../assets/three-dots-vertical.svg';

const Video = ({ video }) => {

  console.log('video', video);

  return (
    <div className='video-card'>
      <img 
        alt='thumbnail-img' 
        className='thumbnail-img'
        src={video.snippet.thumbnails.high.url} 
      />
      <div className='content'>
        <div className='avatar'>
          <img 
            alt="avatar"
            className='avatar-img'
            src="https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg" 
            />
        </div>
        <div className='fields'>
          <h4 className='title' data-tip={video.snippet.title}>
            {video.snippet.title}
            </h4>
          <p className='channel-title' data-tip={video.snippet.channelTitle}>
            {video.snippet.channelTitle}
          </p>
          <p className='created-at-date'>{formatDate(video.snippet.publishedAt)}</p>
        </div>
        <div className='actions'>
          <img 
            alt='three-dots' 
            className='three-dots'
            src={threeDots} 
          />
        </div>
      </div>
      <ReactTooltip 
        delayShow='500'
        place='bottom' 
        solid='solid' 
      />
    </div>
  )
}

export default Video