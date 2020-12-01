
import React, { useState } from 'react'

import ColorBox from './ColorBox'
import Navbar from './Navbar'

import '../../styles/elements/Palette.css'

function Palette(props) {

    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')

    const { paletteName, id, emoji, colors } = props.palette
    const paletteColors = colors[level]

    const onLevelChange = newLevel => {
        setLevel(newLevel)
    }

    const onChangeFormat = newFormat => {
        setFormat(newFormat)
    }

    return (
        <div>
            <div className='Palette'>

                {/* Navbar */}
                <Navbar 
                    level={level}
                    onLevelChange={onLevelChange}
                    onChangeFormat={onChangeFormat}
                />
                
                {/* Grid of Color Boxes */}
                <div className='Palette-colors'>
                    {paletteColors.map(color => (
                        <ColorBox 
                            background={color[format]} 
                            name={color.name}  
                            key={color.id}
                        />
                    ))}
                </div>

                {/* Footer */}
                <footer className='Palette-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        </div>
    )
}

export default Palette
