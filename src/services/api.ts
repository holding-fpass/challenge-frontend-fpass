import axios from 'axios'
import md5 from 'md5'

const publicKey = process.env.REACT_APP_PUBLIC_KEY
const privateKey: any = process.env.REACT_APP_PRIVATE_KEY

const ts = Number(new Date())

const hash = md5(ts + privateKey + publicKey)

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  method: 'GET',
  params: {
    "apikey": publicKey,
    "ts": ts,
    "hash": hash,
  },
});

export default api;