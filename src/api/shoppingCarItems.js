import axios from 'axios'

const getAll = async (order_id) => {
    return await axios.get(`${process.env.NODE_ENV}/shoppingcart/${order_id}`);
}

const remove = async (id) => {
    return await axios.delete(`${process.env.NODE_ENV}/shoppingcart/${id}`);
}

const shoppingCart = { getAll, remove }

export default shoppingCart