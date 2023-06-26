import { useEffect } from 'react'
import axios from 'axios'
import md5 from 'md5'

//const baseUrl = "http://gateway.marvel.com/v1/public"

const publicKey = "5e7f7afccc4dfc25e862680b39e1071a"
const privateKey = "c0557dd983f66c42a48ab0209763646e60f5c9e8"

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey )

function App() {

  useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        .then(response => console.log(response.data))
  }, [] )

  return (
    <div className="App">
      Desafio
    </div>
  );
}

export default App;
