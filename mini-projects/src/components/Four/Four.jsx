import React from 'react'
import './four.css'

function Four() {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',]
    return (
        <ul>
            {items.map((item, index) => {
               return <li key={index}> {item} </li>
            })}
        </ul>
    )
}

export default Four