
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Note: Used to show a slider.
import Slider from 'rc-slider';

// Note: Select Option from Material UI
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'

// Note: SnackBar (to feedback user about changing of format)
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'

import 'rc-slider/assets/index.css';
import '../../styles/elements/Navbar.css'

function Navbar({level, onLevelChange, onChangeFormat}) {

    const [format, setformat] = useState('hex')
    const [snackBarOpen, setSnackBarOpen] = useState(false)

    const onChangeFormatInternal = (e) => {
        setformat(e.target.value)
        onChangeFormat(e.target.value)
        setSnackBarOpen(true)
    }

    const onCloseSnackBar = (e, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setSnackBarOpen(false)
    }

    return (
        <nav className='navbar'>

            {/* Logo */}
            <div className='logo'>
                <Link to="/">ReactColorPicker</Link>
            </div>

            {/* Slider */}
            <div className="slider-container">
                <span>Level {level}</span>
                <div className='Slider'>
                    <Slider 
                        defaultValue={level}                    
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={onLevelChange}
                    />
                </div>
            </div>

            <div className="select-container">
                <Select value={format} onChange={onChangeFormatInternal}>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>

            <Snackbar 
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                open={snackBarOpen}
                autoHideDuration={3000}
                // Close snack bar
                // Note: On Firefox this event appears even on page load
                onClose={onCloseSnackBar}
                message={<span>Format Changed to {format.toUpperCase()}</span>}
                // Close button
                action={[
                    <IconButton
                        // On click of close button, hide the snack bar
                        onClick={onCloseSnackBar}
                        color='inherit'                        
                    >
                        <CloseIcon />
                    </IconButton>                    
                ]}
            />

        </nav>
    )
}

export default Navbar
