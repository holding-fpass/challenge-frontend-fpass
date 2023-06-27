import { useEffect, useState } from 'react'
import api from "../../services/api"

interface propCharacters {
  name: string,
  description: string
}

export default function Characters() {

  const [characters, setCaracters] = useState<propCharacters[]>([])

  useEffect(() => {
    api.get('/characters')
    .then(response => {
      setCaracters(response.data.data.results)
    })
    .catch(err => console.log('erro', err))
  }, [] )
    
  return(
      <div>
        { characters.map( (item) =>
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div> 
        ) }
      </div>
  )
}