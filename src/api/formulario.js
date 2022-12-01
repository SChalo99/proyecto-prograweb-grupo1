import axios from 'axios'
 
const post = async (request) => {
    return await axios
        .post('http://localhost:3001/formulario',request);
}
 
const getAll = async () => {
    return await axios
        .getAll('http://localhost:3001/forulario/getAll');
}
 
const formulario = { post, getAll }
 
export default formulario