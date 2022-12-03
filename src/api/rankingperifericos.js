import axios from 'axios'

const getAll = async () => {
    return await axios
        .get(`${process.env.NODE_ENV}/periferic`);
}

const rankingperifericos = { getAll }

export default rankingperifericos