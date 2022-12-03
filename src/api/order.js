import axios from 'axios'

const create = async (body) =>{
    return await axios.post(`http://localhost:3001/order`, body);
}

const Order = { create }


export default Order