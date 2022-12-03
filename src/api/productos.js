import axios from 'axios'
 
const getAll = async (id) => {
    return await axios
        .get(`${process.env.NODE_ENV}/product/${id}`);
}
 
const productos_api = { getAll }
 
export default productos_api