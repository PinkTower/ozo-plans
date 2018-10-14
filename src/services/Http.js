import axios from 'axios'

// See https://github.com/axios/axios#request-config for more customization.
const Http = axios.create({
  baseURL: 'http://some-domain.com/api/',
})

export default Http
