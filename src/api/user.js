import axios from 'axios'

const login = async (email, password) => {
    return await axios.get(`${process.env.NODE_ENV}/user/${email}/${password}`);
}

const create = async (body) =>{
    return await axios.post(`${process.env.NODE_ENV}/user`, body);
}

const User = { login, create }


export default User