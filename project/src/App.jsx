import { React, useState } from 'react'
import Cocktails from './components/Cocktails'
import Search from "./components/Search"
import './App.css'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className='App'>
      <Search search={search} handleChange={(e) => {
        setSearch(e.target.value)
      }} />
      <Cocktails search={search} />
    </div>
  )
}

export default App
