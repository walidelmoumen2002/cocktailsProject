import React from 'react'

const Cocktail = ({ strDrink, strDrinkThumb, strAlcoholic, strGlass }) => {
  return (
    <article className='card'>
      <img src={strDrinkThumb} alt={strDrink} className='cocktailimg' />
      <div className='description'>
        <p className='title'>{strDrink}</p>
        <p className='glass'>{strGlass}</p>
        <p className='info'>{strAlcoholic}</p>
      </div>

    </article>
  )
}

export default Cocktail
