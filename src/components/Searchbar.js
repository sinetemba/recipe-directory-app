import { useHistory } from 'react-router-dom'
import './Searchbar.css'
import { useState } from "react"

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    history.push(`/search?q=${term}`)
  }

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input
        type="text"
        id="text"
        onChange={(e) => setTerm(e.target.value)}
        required
        />
        </form>      
    </div>
  )
}
    