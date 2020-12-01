
import React from 'react'
// Note: Import Material UI css library
import { withStyles } from '@material-ui/styles'

// Note: Define a styles object. Every key in it will be one class.
const styles = {
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: '#dae1e4',
        // Round corners for the mini palette container
        borderRadius: '5px',
        overflow: 'hidden',
        // Fixed width for the mini palette
        height: '150px',
        width: '100%'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'black',
        fontSize: '1rem',
        margin: '0',
        paddingTop: '0.5rem',
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    // Note: Mini palette styling
    miniColors: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        position: 'relative',
        margin: '0 auto',
        marginBottom: '-4px'
    }
}

function MiniPalette(props) {

    // Note: Extract the classes from the props
    const { classes, paletteName, emoji, colors, handleClick } = props

    const miniPaletteBoxes = colors.map(color => (
        <div 
            className={classes.miniColors} 
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ))

    return (
        <div onClick={handleClick}>
            {/* Note: Use the classes to style elements */}
            <div className={classes.root}>
                <div className={classes.colors}>
                    {miniPaletteBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName} <span className='emoji'>{emoji}</span>
                </h5>
            </div>            
        </div>
    )
}

// Use 'withStyles' HOC to map the styles object with props of the component.
export default withStyles(styles)(MiniPalette)
