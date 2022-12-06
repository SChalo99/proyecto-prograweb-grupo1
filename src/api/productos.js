import axios from 'axios'
 
const getAll = async (id) => {
    return await axios
        .get(`${process.env.REACT_APP_BACKEND}/product/${id}`);
}

const getOptimized = async () => {
    return await axios
        .get(`${process.env.REACT_APP_BACKEND}/product/10`);
}
 
const productos_api = { getAll, getOptimized }
 
export default productos_api