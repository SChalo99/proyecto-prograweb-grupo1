import axios from 'axios'

const login = async (email, password) => {
    return await axios.get(`${process.env.BACKEND}/user/${email}/${password}`);
}

const create = async (body) =>{
    return await axios.post(`${process.env.BACKEND}/user`, body);
}

const User = { login, create }


export default User