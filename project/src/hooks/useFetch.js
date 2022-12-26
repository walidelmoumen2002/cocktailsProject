const useFetch = (url, search) => {
  const fecthData = async () => {
    try {
      const response = await fetch(`${url}${search || 'a'}`)
      const data = await response.json()
      return data.drinks.map((item) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass
        } = item
        return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
      })
    } catch (e) {
      console.log(e)
    }
  }
  return [fecthData]
}
export default useFetch
