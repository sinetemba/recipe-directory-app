
import { useFetch } from '../../hooks/useFetch'
//styles
import './Home.css'
// components
import RecipeList from '../../components/RecipeList'

export default function Home() {

  const {data : recipesData, isPending,error} = useFetch(' http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipesData && <RecipeList recipes={recipesData}/> }
    </div>
  )
}
