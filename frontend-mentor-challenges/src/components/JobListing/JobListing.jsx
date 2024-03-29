import React, { useState } from 'react'
import './JobListing.scss';

import Job from './Job';

import { jobs } from './JobListing.mock';

import bgHeaderDesktop from './assets/bg-header-desktop.svg';

import removeIcon from './assets/icon-remove.svg';
import classNames from 'classnames';

function JobListing() {
  const [selections, setSelections] = useState([]);

  const displaySelections = () => (
    <div className='filter-selections'>

      <div className='selections'>
        {selections.map(selection => (
          <div className='selection' key={selection}>
            <span className='text'>{selection}</span>
            <div
              className='img-container'
              onClick={() => removeSelection(selection)}
            >
              <img className='img' src={removeIcon} alt="remove-icon" />
            </div>
          </div>
        ))}
      </div>

      <span 
        className='clear-all'
        onClick={() => setSelections([])}
      >
        Clear
      </span>

    </div>
  );

  const addSelection = (selection) => {
    setSelections(prevSelections => {
      const found = prevSelections.indexOf(selection);
      if (found !== -1) return prevSelections;

      return [...prevSelections, selection];
    });
  };

  const removeSelection = (selection) => {
    setSelections(prevSelections => {
      const found = prevSelections.indexOf(selection);
      console.log('found', found);
      const newSelections = [
        ...prevSelections.slice(0, found),
        ...prevSelections.slice(found + 1, prevSelections.length),
      ];
      console.log('newSelections', newSelections);
      return [...newSelections];
    });
  }

  return (
    <div className='job-listing-container'>
      <header className='bg-header-img-container'>
        <img className='bg-header-img' src={bgHeaderDesktop} alt='bg-header' />
      </header>

      <div
        className={classNames({
          'jobs-section': true,
          'filter': selections.length > 0
        })}
      >
        {selections.length > 0 && displaySelections()}

        {jobs.map((job, index) => (
          <Job 
            addSelection={addSelection}
            job={job} 
            key={index} 
            selections={selections}
          />
        ))}
        </div>
    </div>
  )
}

export default JobListing