import React from 'react'
import './Job.scss';

function Job({ job, addSelection, selections }) {

  const isMatched = (selection) => {
    if (selection === job.role) {
      return true;
    }

    if (selection === job.level) {
      return true;
    }

    const found = job.skills.find(skill => selection === skill);
    return found;
  }

  const isSelected = () => {
    if (selections.length === 0) {
      return true;
    }

    const found = selections.every(selection => isMatched(selection));
    return found;
  }

  const jobPostMarkup = () => (
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
        <div onClick={() => addSelection(job.role)}>
          {job.role}
        </div>
        <div onClick={() => addSelection(job.level)}>
          {job.level}
        </div>
        {job.skills.map((skill, index) => (
          <div 
            key={index}
            onClick={() => addSelection(skill)}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return isSelected() ? jobPostMarkup() : null;
}

export default Job