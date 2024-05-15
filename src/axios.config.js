import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://task-app-backend-3ifk83vn7-jesus-projects-26369bea.vercel.app/api',
    withCredentials: true
})

export default instance