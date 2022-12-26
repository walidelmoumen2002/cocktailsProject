import { React, useState } from 'react'
import Cocktails from './components/Cocktails'
import { useQuery, useQueryClient } from 'react-query'
import Loading from './components/Loading'
import useFetch from './hooks/useFetch'
import './App.css'

function App() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const queryClient = useQueryClient()
  const [search, setSearch] = useState('')
  const [fecthData] = useFetch(url, search)
  const { isLoading, error, data } = useQuery(['cocktails', search], fecthData)
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

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

  if (!data.length) {
    return (
      <div className='App'>
        <center>
          <div className='search'>
            <h3 className='search_title'>Search your favorite cocktail here</h3>
            <input type='text' value={search} onChange={handleChange} className='search_input' />
          </div>
        </center>
        <p className='loading'>no cocktails with this name</p>
      </div>
    )
  }
  return (
    <div className='App'>
      <center>
        <div className='search'>
          <h3 className='search_title'>Search your favorite cocktail here</h3>
          <input type='text' value={search} onChange={handleChange} className='search_input' />
        </div>
      </center>
      <Cocktails cocktails={data} />
    </div>
  )
}

export default App
