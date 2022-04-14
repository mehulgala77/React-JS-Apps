import React, { useEffect, useState } from 'react'
import faker from 'faker';
import Story from './Story';

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Takeaway: To generate and loop through array n number of times.
    const profiles = [...Array(20)].map((_, i) => ({
      // Note: There is some issue with faker avatar images. Can't access their cdn link
      // avatar: faker.image.avatar(),
      avatar: 'https://miro.medium.com/fit/c/176/176/2*P2Po6oWVEM8Uyu2pA1wiJQ.jpeg',
      username: faker.internet.userName(faker.name.findName()),
      id: i
    }));

    setStories(profiles);
  }, []);

  return (
    <div className='flex space-x-2 p-6 mt-8 bg-white border border-gray-200 rounded-sm overflow-x-scroll'>
      {stories.map(profile => (
        <Story 
          key={profile.id}
          avatar={profile.avatar}
          name={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories