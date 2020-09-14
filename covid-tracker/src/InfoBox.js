
import React from 'react'
import {
    Card, 
    CardContent, 
    Typography
} from '@material-ui/core'

import './InfoBox.css'

function InfoBox({ title, cases, total, onClick, active, isRed }) {
    return (
        <Card 
            onClick={onClick} 
            className={`infobox 
                ${active && 'info--selected'} 
                ${isRed && 'info--selected--red'}`}            
        >
            <CardContent>
                <Typography color="textSecondary" className="infobox__title">
                    {title}
                </Typography>

                <h2 className={`infobox__cases ${!isRed && 'infobox__cases--green'}`}>
                    {cases}
                </h2>

                <Typography color="textSecondary" className="infobox__total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
