import axios from 'axios'


const getAll = async () => {
    return await axios
        .getAll('http://localhost:3001/rankingperifericos/getAll');
}

const rankingperifericos = { getAll }

export default rankingperifericos