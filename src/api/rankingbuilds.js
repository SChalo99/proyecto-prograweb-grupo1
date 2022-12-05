import axios from 'axios'

const getAllArmado = async () => {
    return await axios
        .get(`${process.env.REACT_APP_BACKEND}/preArmado`);
}
const findProducto = async () => {
    return await axios.get(`${process.env.REACT_APP_BACKEND}/preArmado/`)
}


const rankingbuilds = { getAllArmado, findProducto }

export default rankingbuilds
