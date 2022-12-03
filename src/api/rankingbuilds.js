import axios from 'axios'

const getAllArmado = async () => {
    return await axios
        .get('http://localhost:3001/preArmado');
}
const findProducto = async () => {
    return await axios.get(`http://localhost:3001/preArmado/`)
}


const rankingbuilds = { getAllArmado, findProducto }

export default rankingbuilds