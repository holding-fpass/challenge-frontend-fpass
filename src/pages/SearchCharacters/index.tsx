import { useEffect, useState } from 'react'
import api from "../../services/api"
import { Link } from 'react-router-dom'

import Card from '../../components/Card'
import Container from '../style'
import { Input, Label } from '../../styles/Form'
import { Row, Columns } from '../../styles/Columns'
import Loading from '../../components/Loading'




interface propCharacters {
  id: number,
  name: string,
  description?: string,
  thumbnail: {
    path: string,
    extension: string
  }
}

export default function SearchCharacters() {

  const [characters, setCaracters] = useState<propCharacters[]>([])
  const [filteredResults, setFilteredResults] = useState<propCharacters[]>([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    api.get('/characters')
    .then(response => {
      setCaracters(response.data.data.results)
    })
    .catch(err => console.log('erro', err))
  }, [] )


  const handleSearchCharachters = (searchValue: string) => {

    setSearchInput(searchValue)

    const filteredData: any = characters.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
    setFilteredResults(filteredData)
  }

    
  return(
      <Container>
        {characters.length > 0 ? (
          <>

            <h1>Buscar personagem</h1>
            <Label 
              htmlFor="searchCharacters">
                Digite o nome do herói
              </Label>
            <Input 
              id="searchCharacters"
              type="text" 
              onChange={(event: any) => handleSearchCharachters(event.target.value)} />
            <Row>
            { filteredResults.map( (character) =>
              <Columns grid={4}>
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