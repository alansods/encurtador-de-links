// token: 82be27bd0f3c4b341fb0f5190a99556b65f6e7cf

import axios from "axios"

export const key = "82be27bd0f3c4b341fb0f5190a99556b65f6e7cf"

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api