import React from 'react'
import Card from './Card'

const Cards = ({ places }) => {
  return (
    <div>
      {places.map((place) => (
        <Card key={place.pic} {...place} />
      ))}
    </div>
  )
}

export default Cards
