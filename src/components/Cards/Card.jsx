import React from 'react'

const Card = ({ name, description, pic }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={pic} alt={name} />
      <div>{description}</div>
    </div>
  )
}

export default Card
