/* eslint-disable @next/next/no-img-element */
import React from 'react'

import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon
} from '@heroicons/react/outline';

import { HeartIcon as HeartFilledIcon } from '@heroicons/react/solid';

function Post({
  id,
  username,
  userImg,
  img,
  caption,
}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <img
          className='w-12 h-12 rounded-full object-contain p-1 border mr-3'
          src={userImg}
          alt="userImg" 
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>

      {/* Img */}
      <img
        className='object-cover w-full'
        src={img}
        alt="img" 
      />

      {/* Buttons */}
      <div className='flex justify-between p-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn' />
        </div>
        <BookmarkIcon className='btn' />
      </div>

      {/* Caption */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          className='border-none flex-1 outline-none focus:ring-0'
          placeholder='Add a Comment...'
          type="text"
        />
        <button className='font-semibold text-blue-400'>
          Post
        </button>
      </form>
    </div>
  )
}

export default Post