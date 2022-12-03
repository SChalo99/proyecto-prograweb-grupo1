import axios from 'axios'

const getAll = async (order_id) => {
    return await axios.get(`http://localhost:3001/shoppingcart/${order_id}`);
}

const remove = async (id) => {
    return await axios.delete(`http://localhost:3001/shoppingcart/${id}`);
}

const shoppingCart = { getAll, remove }

export default shoppingCart