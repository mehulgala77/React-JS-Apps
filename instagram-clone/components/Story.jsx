/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Story({ avatar, name }) {
  return (
    <div>
      <img
        // Takeaway: p-[1.5px] is given using JIT compiler for tailwindcss
        className='w-14 h-14 rounded-full p-[1.5px] 
          border-2 border-red-500 object-contain cursor-pointer
          hover:scale-110 transition transform duration-200 ease-out
          scrollbar-thin scrollbar-thumb-black'
        src={avatar} 
        alt="avatar" 
      />
      <p className='text-xs w-14 truncate text-center'>
        {name}
      </p>
    </div>
  )
}

export default Story