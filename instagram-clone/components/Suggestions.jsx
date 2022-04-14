/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import faker from 'faker';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const items = [...Array(5)].map((_, i) => ({
      // Note: There is some issue with faker avatar images. Can't access their cdn link
      // avatar: faker.image.avatar(),
      avatar: 'https://miro.medium.com/fit/c/176/176/2*P2Po6oWVEM8Uyu2pA1wiJQ.jpeg',
      username: faker.internet.userName(faker.name.findName()),
      company: faker.company.companyName(),
      id: i
    }));

    setSuggestions(items);
  }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex items-center justify-between text-sm mb-5'>
        <h3 className='font-bold text-gray-400'>Suggestions for you</h3>
        <button className='font-semibold text-gray-600'>See All</button>
      </div>

      {suggestions.map(profile => (
        <div
          className='flex items-center justify-between mt-3'
          key={profile.id}
        >
          <img
            className='w-10 h-10 rounded-full border p-[2px]'
            src={profile.avatar}
            alt="profile avatar" 
          />

          <div className='flex-1 mx-4'>
            <h2 className='font-semibold text-sm'>{profile.username}</h2>
            <h3 className='text-sm text-gray-400 truncate'>Works at {profile.company}</h3>
          </div>

          <button className='text-blue-400 font-bold text-sm'>
            Follow
          </button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions