import React from 'react'

function Card({ pokemon }) {
    let { imageUrl, name, color } = pokemon

    return (
        <div style={{ backgroundColor: color }}>
            <img src={imageUrl} alt="" width={150} />
            <h3>{name}</h3>
        </div>
    );
}

export default Card
