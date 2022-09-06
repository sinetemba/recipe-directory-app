import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'

//styles
import './Home.css'
// components
import RecipeList from '../../components/RecipeList'


export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    setIsPending(true);

    //connect to the recipes collection in Firebase
    //get() returns snapshots of collection, is async and returns a promise
    //then() callback function fires when get is done 
    projectFirestore.collection('recipes').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No recipes to load')
        isPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results);
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })

  }, [])


  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
