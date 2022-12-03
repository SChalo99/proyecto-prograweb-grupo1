import axios from 'axios'

const getAllArmado = async () => {
    return await axios
        .get(`${process.env.NODE_ENV}/preArmado`);
}
const findProducto = async () => {
    return await axios.get(`${process.env.NODE_ENV}/preArmado/`)
}


const rankingbuilds = { getAllArmado, findProducto }

export default rankingbuilds