import { useEffect, useState } from 'react'
import api from "../../services/api"
import { Link } from 'react-router-dom'
import Container from '../style'
import { Row, Columns } from '../../styles/Columns'
import Loading from '../../components/Loading'
import Card from '../../components/Card'



interface propCharacters {
  id: number,
  name: string,
  description: string,
  thumbnail: {
    path: string,
    extension: string
  }
}

export default function ListCharacters() {

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
        {characters.length > 0 ? (
          <>
            <h1>Personagem</h1>
            <Row>
            { characters.map( (character) =>
              <Columns grid={3}>
                <Link to={`/character/${character.id}`}>
                  <Card 
                    key={character.id}
                    name={character.name}
                    description={character.description}
                    thumbnailUrl={character.thumbnail.path}
                    thumbnailExtension={character.thumbnail.extension}
                  />
                </Link>
              </Columns> 
            )}
            </Row>
          </>
        ) : (
          <Loading />
        )}
      </Container>
  )
}