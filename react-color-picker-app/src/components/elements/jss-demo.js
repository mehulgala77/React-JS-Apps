
// Note: CSS-in-JS is a New ways of writing CSS. We can write CSS in JS files 
// (popular one is styled components.)

// We will be using a styling library included with Material UI. 
// It's their own internal styling solution. They expose it to users.
// We can use it to style our own components or Material UI components. 
// You can use only their styling library and ignore their components.

// It allows us to write styles in SASS language.

// Advantages over plain-css in a file,
// 1. We can use fancier syntax, SASS styled selectors, nested selectors, 
// 2. Scope our style to a given component.

// Separate package @material-ui/styles

import React from 'react'
// Note: Import Material UI css library
import { withStyles } from '@material-ui/styles'

// Note: Define a styles object. Every key in it will be one class.
const styles = {
    main: {
        backgroundColor: 'purple',
        border: '3px solid teal',
        // Note: Nested Styles
        '& h3': {
            color: 'white'
        }
    },
    // Note: Another class
    secondary: {
        backgroundColor: 'maroon',
        border: '3px solid orange'
    }
}

function MiniPalette(props) {

    // Note: Extract the classes from the props
    const { classes } = props

    return (
        <>
            {/* Note: Use the classes to style elements */}
            <div className={classes.main}>
                <h2>I am a big header</h2>
                <h3>Nested Item</h3>
            </div>
            <div className={classes.secondary}>
                <h2>I am a small header</h2>
            </div>
        </>
    )
}

// Use 'withStyles' HOC to map the styles object with props of the component.
export default withStyles(styles)(MiniPalette)
