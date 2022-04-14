/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';

import {
  SearchIcon, 
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>

        {/* left section - logos */}
        <div className='relative hidden lg:inline-flex w-24 cursor-pointer'>
          <Image
            alt='Instagram Big logo'
            src='https://links.papareact.com/ocw' 
            layout='fill' 
            objectFit='contain'
          />
        </div>

        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            alt='Instagram Small logo'
            src='https://links.papareact.com/jjm' 
            layout='fill' 
            objectFit='contain'
          />
        </div>

        {/* center section - search bar */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input 
              className='bg-gray-50 pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
              type="text" 
              placeholder='Search' 
            />
          </div>
        </div>

        {/* right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='nav-btn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          <div className='nav-btn relative'>
            <PaperAirplaneIcon className='nav-btn rotate-45' />
            <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 flex justify-center items-center text-white rounded-full animate-pulse'>
              3
            </div>
          </div>

        
          <PlusCircleIcon className='nav-btn' />
          <UserGroupIcon className='nav-btn' />
          <HeartIcon className='nav-btn' />

          <img
            alt="profile picture" 
            className='h-10 rounded-full cursor-pointer'
            src="https://links.papareact.com/3ke"
          />
        </div>
      </div>
    </div>
  )
}

export default Header