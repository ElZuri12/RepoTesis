import axios from 'axios'

const UsuariosApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/users/api/usuarios/'
})

export const getAllUsers = () => UsuariosApi.get('/')