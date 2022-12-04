import axios from 'axios'

const login = async (email, password) => {
    return await axios.get(`${process.env.REACT_APP_BACKEND}/user/${email}/${password}`);
}

const create = async (body) =>{
    return await axios.post(`${process.env.REACT_APP_BACKEND}/user`, body);
}

const User = { login, create }


export default User