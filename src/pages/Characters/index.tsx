import { useEffect, useState } from 'react'
import api from "../../services/api"
import { Link } from 'react-router-dom'

import Card from '../../components/Card'
import Container from '../style'
import { Row, Columns } from '../../styles/columns'
import Loading from '../../components/Loading'




interface propCharacters {
  id: number,
  name: string,
  description: string,
  thumbnail: {
    path: string,
    extension: string
  }
}

export default function Characters() {

  const [characters, setCaracters] = useState<propCharacters[]>([])
  const [filteredResults, setFilteredResults] = useState<propCharacters[]>([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    api.get('/characters')
    .then(response => {
      setCaracters(response.data.data.results)
    })
    .catch(err => console.log('erro', err))
  }, [] )


  const handleSearchCharachters = (searchValue: string) => {

    setSearchInput(searchValue)

    if (searchInput !== '') {
      const filteredData: any = characters.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
  }
  else{
      setFilteredResults(characters)
  }

  }

    
  return(
      <Container>
        {characters.length > 0 ? (
          <>
            <h1>Personagem</h1>

              <input 
                type="text" 
                onChange={(event) => handleSearchCharachters(event.target.value)} />
            <Row>
            { filteredResults.map( (character) =>
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