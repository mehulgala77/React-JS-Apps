import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl m-auto'>

      <section className='col-span-1 xl:col-span-2'>
        <Stories />
        <Posts />
      </section>

      <section className='hidden md:inline-grid md:col-span-1'>
        {/* Takeaway: Tto handle top alignment of a section in grid */}
        <div className='fixed top-20'>
          <MiniProfile />
          <Suggestions />
        </div>
      </section>

    </main>
  )
}

export default Feed