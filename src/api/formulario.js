import axios from 'axios'
 
const post = async (request) => {
    return await axios
        .post(`${process.env.NODE_ENV}/report`,request);
}
 
const getAll = async () => {
    return await axios
        .getAll(`${process.env.NODE_ENV}/report/getAll`);
}
 
const formulario = { post, getAll }
 
export default formulario