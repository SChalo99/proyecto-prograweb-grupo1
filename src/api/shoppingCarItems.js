import axios from 'axios'

const getAll = async (order_id) => {
    return await axios.get(`http://localhost:3001/${order_id}`);
}

const remove = async (id) => {
    return await axios.delete(`http://localhost:3001/${id}`);
}

const shoppingCart = { getAll, remove }

export default shoppingCart