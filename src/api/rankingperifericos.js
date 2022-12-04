import axios from 'axios'

const getAll = async () => {
    return await axios
        .get(`${process.env.REACT_APP_BACKEND}/periferic`);
}

const rankingperifericos = { getAll }

export default rankingperifericos