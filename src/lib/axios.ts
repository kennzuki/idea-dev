import axios from 'axios'

const api=axios.create({
    baseURL:'/api',
    withCredentials: true,
    headers:{
        'content-Type':'applications/json'
    }
})

export default api