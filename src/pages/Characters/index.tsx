import { useEffect } from 'react'
import api from "../../services/api"

export default function Characters() {

  useEffect(() => {
    api.get('/characters')
    .then(response => console.log(response.data.data))
    .catch(err => console.log('erro', err))
  }, [] )
    
  return(
      <div>
        Herois
      </div>
  )
}