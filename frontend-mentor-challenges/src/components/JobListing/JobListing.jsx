import React from 'react'
import './JobListing.scss';

import Job from './Job';

import { jobs } from './JobListing.mock';

import bgHeader from './assets/bg-header-desktop.svg';

function JobListing() {

  return (
    <div className='job-listing-container'>
      <header className='bg-header-img-container'>
        <img className='bg-header-img' src={bgHeader} alt='bg-header' />

        <div className='jobs-section'>
          {jobs.map((job, index) => (
            <Job job={job} key={index} />
          ))}
        </div>

      </header>
    </div>
  )
}

export default JobListing