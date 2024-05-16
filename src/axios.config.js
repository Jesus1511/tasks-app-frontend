import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://task-app-backend-p7f5ds26l-jesus-projects-26369bea.vercel.app/api',
    withCredentials: true
})

export default instance