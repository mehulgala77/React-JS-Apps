import './Video.scss';

import React, { useState } from 'react';

import ReactTooltip from 'react-tooltip';
import { formatDate } from '../../utils/dateHelper';
import threeDots from '../../assets/three-dots-vertical.svg';

const Video = ({ video }) => {

  const [cardShow, setCardShow] = useState(false);
  const [timer, setTimer] = useState(null);

  const enableCard = () => {
    const timer = setTimeout(() => {
      setCardShow(true);
    }, 1000);

    setTimer(timer);
  }

  const disableCard = () => {
    clearTimeout(timer);
    setTimer(null);
    setCardShow(false);
  };

  const videoCard = () => (
    <div className={`video-card ${cardShow && 'show'}`}>
      <img 
        alt='thumbnail-img' 
        className='thumbnail-img'
        src={video.snippet.thumbnails.high.url} 
      />
      <div className='content'>
        <h1>Hello</h1>
      </div>
  </div>
  );

  return (
    <div 
      className='video-container'
      onMouseEnter={() => enableCard()}
      onMouseLeave={() => disableCard()}
    >
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
        delayShow={500}
        place='bottom' 
        solid='solid' 
      />
      {videoCard()}
    </div>
  )
}

export default Video