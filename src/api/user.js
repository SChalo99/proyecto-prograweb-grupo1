import axios from 'axios'

const login = async (email, password) => {
    return await axios.get(`http://localhost:3001/user/${email}/${password}`);
}

const create = async (body) =>{
    return await axios.post(`http://localhost:3001/user`, body);
}

const User = { login, create }


export default User