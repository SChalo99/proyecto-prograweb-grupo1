import axios from 'axios'

const create = async (body) =>{
    return await axios.post(`${process.env.NODE_ENV}/order`, body);
}

const Order = { create }


export default Order