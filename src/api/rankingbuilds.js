import axios from 'axios'

const getAllArmado = async () => {
    return await axios
        .get('http://localhost:3001/preArmado');
}
const findProducto = async (productId) => {
    return await axios.get(`http://localhost:3001/preArmadoProducto/${productId}`)
}


const rankingbuilds = { getAllArmado, findProducto, getAllProduct }

export default rankingbuilds