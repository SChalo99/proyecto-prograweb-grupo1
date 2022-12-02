import axios from 'axios'

const getAll = async () => {
    return await axios
        .get('http://localhost:3001/periferic');
}

const rankingperifericos = { getAll }

export default rankingperifericos