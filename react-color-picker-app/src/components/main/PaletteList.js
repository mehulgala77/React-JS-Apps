
import React from 'react'
import { withStyles } from '@material-ui/styles'

import MiniPalette from '../elements/MiniPalette'

const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

function PaletteList({palettes, classes, history}) {

    const goToPalette = (paletteId) => {
        const paletteRoute = `/palette/${paletteId}`
        history.push(paletteRoute)
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.nav}>
                    <h1>React Color</h1>
                </div>
                <div className={classes.palettes}>
                    {palettes.map(palette => (
                        <p>
                            <MiniPalette 
                                {...palette} 
                                key={palette.id} 
                                handleClick={() => goToPalette(palette.id)}                                
                            />
                        </p>
                    ))}
                </div>
            </div>                        
        </div>
    )
}

export default withStyles(styles)(PaletteList)
