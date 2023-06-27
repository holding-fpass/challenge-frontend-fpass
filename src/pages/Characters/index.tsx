import { useEffect, useState } from 'react'
import api from "../../services/api"

import Container from '../style'

interface propCharacters {
  name: string,
  description: string,
  thumbnail: {
    path: string,
    extension: string
  }
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
      <Container>
        { characters.map( (character) =>
          <div>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </div> 
        ) }
      </Container>
  )
}