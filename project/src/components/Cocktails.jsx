import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useQuery, useQueryClient } from 'react-query'
import fetchData from '../fetcher'

const Cocktails = ({ search, handleChange }) => {
  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery(['cocktails', search], () => fetchData(search))
  if (error) {
    return (
      <p>{error.message}</p>
    )
  }

  if (isLoading) {
    return (
      <div className='App'>
        <Loading />
      </div>
    )
  }
  if (!data.drinks) {
    return (
      <div className='App'>
        <p className='loading'>no cocktails with this name</p>
      </div>
    )
  }

  return (
    <section>
      <article className='cocktails'>
        {data.drinks.map((item) => {
          return <Cocktail key={item.idDrink} {...item} />
        })}
      </article>
    </section>
  )
}

export default Cocktails
