import { useEffect, useState } from 'react'
import api from "../../services/api"


import Container from '../style'
import { useParams } from 'react-router-dom'

interface propCharacters {
  id?: number,
  name?: string
}

const SingleCharacters = () => {

  const { id } = useParams();

  const [singleCharacter, setSingleCharacter] = useState<propCharacters>({})

  useEffect(() => {
    api.get(`/characters/${id}`)
    .then(response => {
      setSingleCharacter(response.data.data.results[0])

    })
    .catch(err => console.log('erro', err))
  }, [] )
    
  return(
      <Container>
        {singleCharacter.name}
      </Container>
  )
}

export default SingleCharacters;