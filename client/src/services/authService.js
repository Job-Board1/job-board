import axios from 'axios'

const signUp = async (userData) => {
  return axios.post('/api/signup', userData)
}

const signIn = async (userData) => {
  return axios.post('/api/signin', userData)
}

export default { signUp, signIn }
