
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Note: Used to copy data to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard'

import '../../styles/elements/ColorBox.css'

function ColorBox({background, name}) {

    const [copied, setCopied] = useState(false)

    // Note: Callback called when text is copied
    const textCopied = () => {

        setCopied(true)
        
        // Note: Active Copied Overlay Animation for 1.5 seconds
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    return (
        // Note: Set whatever you want to copy in the "text" prop.
        // Note: Set whatever you want to copy in the "text" prop.
        <CopyToClipboard text={background} onCopy={textCopied}>
                        
            <div style={{ backgroundColor: background }} className='ColorBox'>

                {/* Overlap Banner when text is copied. */}
                <div 
                    style={{ backgroundColor: background }} 
                    className={`copy-overlay ${copied && 'show'}`}                     
                />

                {/* Text Shown after overlap banner is displayed */}
                <div 
                    className={`copy-msg ${copied && 'show'}`}
                >
                    <h1>copied!</h1>
                    <p>{background}</p>
                </div>

                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                    <Link to='/' onClick={e => e.stopPropagation()}>
                        <div className='see-more'>
                            <span>More</span>
                        </div>
                    </Link>
                </div>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox
