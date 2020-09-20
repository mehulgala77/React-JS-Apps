
import React from 'react'

import '../styles/SidebarRow.css'

// Note: Consume component as prop. It has to be upper case 
function SidebarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && 'active'}`}>
            < Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow
