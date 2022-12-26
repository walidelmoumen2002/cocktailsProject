import React from 'react'
import Cocktail from './Cocktail'
import { useSelector } from 'react-redux'
const Cocktails = ({ cocktails }) => {
  console.log(cocktails)
  return (
    <section>
      <article className='cocktails'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </article>
    </section>
  )
}

export default Cocktails
