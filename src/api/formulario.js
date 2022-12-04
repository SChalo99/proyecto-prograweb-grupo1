import axios from 'axios'
 
const post = async (request) => {
    return await axios
        .post(`${process.env.REACT_APP_BACKEND}/report`,request);
}
 
const getAll = async () => {
    return await axios
        .getAll(`${process.env.REACT_APP_BACKEND}/report/getAll`);
}
 
const formulario = { post, getAll }
 
export default formulario