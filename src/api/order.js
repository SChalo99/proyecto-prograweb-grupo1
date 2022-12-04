import axios from 'axios'

const create = async (body) =>{
    return await axios.post(`${process.env.REACT_APP_BACKEND}/order`, body);
}

const Order = { create }


export default Order