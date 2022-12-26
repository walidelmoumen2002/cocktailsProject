const fetchData = async (search) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search || 'a'}`)
  return response.json()


}
export default fetchData