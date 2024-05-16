import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://task-app-backend-2391z1d5a-jesus-projects-26369bea.vercel.app//api',
    withCredentials: true
})

export default instance