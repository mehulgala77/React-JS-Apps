import React, { useState } from 'react'
import classnames from 'classnames';
import './FAQ.scss';

import bgPatternDesktop from './assets/bg-pattern-desktop.svg';
import ladyDesktop from './assets/illustration-woman-online-desktop.svg';
import boxDesktop from './assets/illustration-box-desktop.svg';
import arrowImg from './assets/icon-arrow-down.svg';

const faqData = [
  {
    q: 'How many team members can I invite?',
    a: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  },
  {
    q: 'What is the maximum file upload size?',
    a: 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },
  {
    q: 'How do I reset my password?',
    a: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },
  {
    q: 'Can I cancel my subscription?',
    a: "Yes! Send us a message and we'll process your request no questions asked."
  },
  {
    q: 'Do you provide additional support?',
    a: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  }
];

function FAQ() {
  const [selected, setSelected] = useState([false, false, false, false, false]);

  const handleClick = (index) => {
    const newState = [false, false, false, false, false];
    newState[index] = !selected[index];
    setSelected(newState);
  };

  const faqSection = () => (
    <div className='faq-content'> 
      <h1 className='title'>FAQ</h1>
      <div className='qa-container'>
        {faqData.map((item, i) => (
          <div 
            className={classnames({
              'faq-item': true,
              'open': selected[i]
            })}
            key={i}
            onClick={() => handleClick(i)}
          >
            <div className='question-content'>
              {item.q}
              <img className='arrow' src={arrowImg} alt='arrow' />
            </div>
            <div className='answer-content'>
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='faq-container'>
      <div className="content">
        <div className="illustration">
          <img className='illustration-img' src={bgPatternDesktop} alt="illustration-img" />
          <img className='lady-img' src={ladyDesktop} alt="lady-desktop-img" />
        </div>
        <div className="faq">
          {faqSection()}
        </div>
        <img className='box-img' src={boxDesktop} alt="box-img" />
      </div>
    </div>
  )
}

export default FAQ