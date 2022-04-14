import React from 'react'
import Post from './Post'

const DUMMY_DATA = [
  {
    id: '123',
    username: 'mgala',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Exciting place!'
  },
  {
    id: '234',
    username: 'mgala',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Exciting place!'
  }
]

function Posts() {
  return (
    <div>
      {DUMMY_DATA.map(post => (
        <Post 
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts