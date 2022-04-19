import React from 'react';

import QRCodeImg from './assets/image-qr-code.png';
import './QRCode.scss';

function QRCode() {
  return (
    <div className='qrcode-container'>
      <div className='content-card'>
        <img className='img' src={QRCodeImg} alt="qr-code" />
        <h2 className='title'>
          Improve your front-end skills by building projects
        </h2>
        <p className='desc'>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}

export default QRCode