import axios from './axios'

export const apiAuth = data => {
    return axios.post('/oauth/token',data)
}