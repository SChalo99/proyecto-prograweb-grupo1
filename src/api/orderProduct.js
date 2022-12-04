import axios from 'axios'

const create = async (body) =>{
    return await axios.post(`${process.env.REACT_APP_BACKEND}/orderproduct`, body);
}

const findProduct = async (id) =>{
    return await axios.get(`${process.env.REACT_APP_BACKEND}/orderproduct/${id}`);
}

const OrderProduct = { create, findProduct }


export default OrderProduct