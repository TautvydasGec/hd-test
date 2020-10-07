import React from 'react'
import Card from './Card'

const Cards = ({ places, handleCardClick }) => (
  places.map((place) => (
    <div
      key={place.pic}
      onClick={() => handleCardClick(place)}
    >
      <Card {...place} />
    </div>
  ))
)

export default Cards
