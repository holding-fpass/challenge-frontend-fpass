import { useEffect, useState } from 'react'
import api from "../../services/api"


import Container from '../style'

interface propCharacters {
  id?: number
}

const SingleCharacters: React.FC<propCharacters> = ({
  id
}) => {

  const [characters, setCaracters] = useState<propCharacters[]>([])

  useEffect(() => {
    api.get(`/characters/${id}`)
    .then(response => {
      setCaracters(response.data)

      console.log(characters)
    })
    .catch(err => console.log('erro', err))
  }, [] )
    
  return(
      <Container>
        teste
        {id}
      </Container>
  )
}

export default SingleCharacters;