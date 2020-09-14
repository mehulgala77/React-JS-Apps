
import React from 'react'
import './table.css'

import numeral from 'numeral'

function Table({ countries }) {
    return (
        <table className="table">
            {countries.map(country => (
                <tr>
                    <td>{country.country}</td>
                    <td><strong>{numeral(country.cases).format("0,0")}</strong></td>
                </tr>
            ))}
        </table>
    )
}

export default Table
