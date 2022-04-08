import React from 'react'

export default function ProductItem({ image, name, type }) {
    return (
        <div className='productItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{type}</h1>
            <p>{name}</p>
        </div>
    )
}
