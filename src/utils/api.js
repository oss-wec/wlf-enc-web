import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:1313'
})

export function getSpeciesList () {
  return api.get('/species')
}
