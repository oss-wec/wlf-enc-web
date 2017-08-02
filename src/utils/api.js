import axios from 'axios'
const api = axios.create({
  // baseURL: 'http://localhost:1313'
  baseURL: 'http://34.208.55.29:1313'
})

export function getSpeciesList () {
  return api.get('/lists/species')
}

export function getProjectList () {
  return api.get('/lists/projects')
}

export function getAnimals () {
  return api.get('/elements')
}

export function createAnimals (data) {
  return api.post('/events/test', data)
}

export function createProject (data) {
  return api.post('/projects', data)
}
