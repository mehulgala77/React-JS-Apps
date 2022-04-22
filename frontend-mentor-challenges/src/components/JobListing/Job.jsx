import React from 'react'
import './Job.scss';

function Job({ job }) {
  return (
    <div className='job-post'>
      <img src={require(`./assets/${job.logo}`)} alt="job-logo" />
      <div className='job-details'>
        <div className='title'>
          <h3 className='company'>{job.company}</h3>
          {job.new && <p className='new-label'>new!</p>}
          {job.featured && <p className='featured-label'>featured</p>}
        </div>
        <p className='position'>{job.position}</p>
        <div className='footer'>
          <p>{job.meta.duration}</p>
          <p>-</p>
          <p>{job.meta.type}</p>
          <p>-</p>
          <p>{job.meta.location}</p>
        </div>
      </div>
      <div className='job-filters'>
        <div>{job.role}</div>
        <div>{job.level}</div>
        {job.skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </div>
  )
}

export default Job