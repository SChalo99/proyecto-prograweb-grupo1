import axios from 'axios'

const create = async (body) =>{
    return await axios.post(`${process.env.NODE_ENV}/orderproduct`, body);
}

const findProduct = async (id) =>{
    return await axios.get(`${process.env.NODE_ENV}/orderproduct/${id}`);
}

const OrderProduct = { create, findProduct }


export default OrderProduct