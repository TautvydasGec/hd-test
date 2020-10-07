import React from 'react'

import './card.css'

const Card = ({ name, description, pic }) => {
  return (
    <div className="card">
      <img src={pic} alt={name} />
      <div className="card-description">
        <h2>{name}</h2>
        <p>{description.length > 81
          ? `${description.slice(0, 80)}...`
          : description}</p>
      </div>
    </div>
  )
}

export default Card
