import axios from 'axios'
import md5 from 'md5'

const publicKey = "5e7f7afccc4dfc25e862680b39e1071a"
const privateKey = "c0557dd983f66c42a48ab0209763646e60f5c9e8"

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