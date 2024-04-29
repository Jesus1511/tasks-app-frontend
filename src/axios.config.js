import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://swsxk2sh-3000.use2.devtunnels.ms/api',
    withCredentials: true
})

export default instance