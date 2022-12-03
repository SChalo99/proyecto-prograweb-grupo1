import axios from 'axios'
 
const getAll = async (id) => {
    return await axios
        .get(`${process.env.BACKEND}/product/${id}`);
}
 
const productos_api = { getAll }
 
export default productos_api