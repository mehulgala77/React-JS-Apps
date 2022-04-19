import React, { useState } from 'react'
import classNames from 'classnames';
import './Rating.scss';

import starIcon from './assets/icon-star.svg';
import thankYouIcon from './assets/illustration-thank-you.svg';

const ratings = [1, 2, 3, 4, 5];

function Rating() {
  const [selection, setSelection] = useState(null);
  const [submit, setSubmit] = useState(false);

  const ratingView = () => (
    <>
      <div className='star-img-container'>
        <img src={starIcon} alt="" />
      </div>

      <h2 className='title'>How did we do?</h2>

      <p className='desc'>
        Please let us know how we did with your support request. All feedback is 
        appreciated to help us improve our offering!
      </p>

      <div className='ratings'>
        {ratings.map(rating => (
          <span 
            className={classNames({
              'rating': true,
              'active': rating === selection
            })}
            onClick={() => setSelection(rating)}
          >
            {rating}
          </span>
        ))}
      </div>

      <div className='submit' onClick={() => selection && setSubmit(true)}>
        Submit
      </div>
    </>
  );

  const submitView = () => (
    <div className='submit-container'>
      <div className='thank-you-container'>
        <img src={thankYouIcon} alt="" />
      </div>

      <p className='final-selection-msg'>
        You selected {selection} out of 5
      </p>

      <h2 className='thank-you-title'>Thank you!</h2>
      
      <p className='thank-you-desc'>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch!
      </p>
    </div>
  );

  return (
    <div className='rating-container'>
      <div className='content'>
        {!submit ? ratingView() : submitView()}
      </div>
    </div>
  );
}

export default Rating