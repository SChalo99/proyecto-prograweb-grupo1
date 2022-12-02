import axios from 'axios'

const getAll = async () => {
    return await axios
        .getAll('http://localhost:3001/rankingbuilds/getAll');
}

const rankingbuilds = { getAll }

export default rankingbuilds