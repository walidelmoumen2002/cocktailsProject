import React from 'react'

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className='card'>
      <img src={image} alt={name} className='cocktailimg' />
      <div className='description'>
        <p className='title'>{name}</p>
        <p className='glass'>{glass}</p>
        <p className='info'>{info}</p>
      </div>

    </article>
  )
}

export default Cocktail
