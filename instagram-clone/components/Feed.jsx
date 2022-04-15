import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react';

function Feed() {
  const { data: session } = useSession();

  return (
    // Takeaway: pass important styles using tailwind
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl m-auto
       ${!session && '!grid-cols-1 !max-w-3xl'} `}>

      <section className='col-span-1 xl:col-span-2'>
        <Stories />
        <Posts />
      </section>

      {session && (
        <section className='hidden md:inline-grid md:col-span-1'>
          {/* Takeaway: Tto handle top alignment of a section in grid */}
          <div className='fixed top-20'>
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
      

    </main>
  )
}

export default Feed