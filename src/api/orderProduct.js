import axios from 'axios'

const create = async (body) =>{
    return await axios.post(`${process.env.BACKEND}/orderproduct`, body);
}

const findProduct = async (id) =>{
    return await axios.get(`${process.env.BACKEND}/orderproduct/${id}`);
}

const OrderProduct = { create, findProduct }


export default OrderProduct