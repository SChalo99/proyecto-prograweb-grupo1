import axios from 'axios'

const getAll = async (order_id) => {
    return await axios.get(`${process.env.REACT_APP_BACKEND}/shoppingcart/${order_id}`);
}

const remove = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_BACKEND}/shoppingcart/${id}`);
}

const shoppingCart = { getAll, remove }

export default shoppingCart