import axios from 'axios'
 
const post = async (request) => {
    return await axios
        .post('http://localhost:3001/report',request);
}
 
const getAll = async () => {
    return await axios
        .getAll('http://localhost:3001/report/getAll');
}
 
const formulario = { post, getAll }
 
export default formulario