import axios from 'axios'
 
const getAll = async (id) => {
    return await axios
        .get(`http://localhost:3001/product/${id}`);
}
 
const productos_api = { getAll }
 
export default productos_api