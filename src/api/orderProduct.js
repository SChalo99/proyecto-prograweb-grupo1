import axios from 'axios'

const create = async (body) =>{
    return await axios.post(`http://localhost:3001/orderproduct`, body);
}

const findProduct = async (id) =>{
    return await axios.get(`http://localhost:3001/orderproduct/${id}`);
}

const OrderProduct = { create, findProduct }


export default OrderProduct