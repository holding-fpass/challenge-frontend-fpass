import { useEffect, useState } from 'react'
import api from "../../services/api"


import Container from '../style'
import { SingleThumbnail} from './style'
import { useParams } from 'react-router-dom'
import { Columns, Row } from '../../styles/columns'
import SingleTopics from '../../components/SingleTopics'
import Button from '../../components/Button'

interface propCharacters {
  id: number,
  name: string,
  description: string,
  events?: {
    items?: any,
    returned: number
  },
  series?: {
    items?: any,
    returned: number
  },
  stories?: {
    items?: any,
    returned: number
  },
  thumbnail?: {
    path?: string,
    extension?: string
  }
}

const SingleCharacters = () => {

  const { id } = useParams();
  const [singleCharacter, setSingleCharacter] = useState<propCharacters>(Object)

  useEffect(() => {
    api.get(`/characters/${id}`)
    .then(response => {
      setSingleCharacter(response.data.data.results[0])

    })
    .catch(err => console.log('erro', err))
  }, [id] )

  return(
      <Container>
        <Row>
          <Columns grid={3}>
            <SingleThumbnail 
              src={`${singleCharacter.thumbnail?.path}.${singleCharacter.thumbnail?.extension}`} 
              alt={singleCharacter.name} />
          </Columns>
          <Columns grid={8}>
            <h1>{singleCharacter.name}</h1>
            <p>{singleCharacter.description}</p>
            
            <SingleTopics 
              title="Eventos" 
              items={singleCharacter?.events?.items} 
              />

            <SingleTopics 
              title="Séries" 
              items={singleCharacter?.series?.items} 
              />

            <SingleTopics 
              title="Histórias" 
              items={singleCharacter?.stories?.items} 
              />

          </Columns>
        </Row>
        
        <Button color='primary' url="/" label="Voltar" />
      </Container>
  )
}

export default SingleCharacters;