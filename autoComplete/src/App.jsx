import { useState } from 'react'
import './App.css'
import Countries from './resources/countryData.json'

export default function App (){
  const[query, setQuery] = useState("")

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      setQuery("") 
    }
  }
  return (
    <>
    <div className='search'>
      <input placeholder="Enter a letter" onChange={event => setQuery(event.target.value)} onKeyDown={handleKeyDown}/>
      {
        Countries.filter((country)=>{
          if(query === ""){
            return ""
          } else if (country.name.toLowerCase().startsWith(query.toLowerCase())){
            return country
          }
        }).map((country) => (
          <div key={country.code} className='list'>
            <p>{country.name}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}
