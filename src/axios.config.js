import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://task-app-backend-qx0pyc6fw-jesus-projects-26369bea.vercel.app/api',
    withCredentials: true
})

export default instance