const axios = require('axios')
const baseURL = 'https://como-fazer-ae9a4.firebaseio.com/'
const authKey = '1LNP7KMFOBH51Z3yA0uOZuFyaj8MgtyZtEkWUb3U'

const list = async (key) => {
    const content = await axios.get(`${baseURL}${key}.json?auth=${authKey}`)
    if (content.data) {
        const objetos = Object.keys(content.data)
            .map(key => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })
        return objetos
    } else {
        return []
    }
}

const apagar = async (key, id) => {
    await axios.delete(`${baseURL}${key}/${id}.json?auth=${authKey}`)
}

const get = async (key, id) => {
    const content = await axios.get(`${baseURL}${key}/${id}.json?auth=${authKey}`)
    if (content.data) {
        return {
            id: id,
            ...content.data
        }
    }
}

const update = async (key, id, data) => {
    await axios.put(`${baseURL}${key}/${id}.json?auth=${authKey}`, data)
}

const create = async (key, data) => {
    await axios.post(`${baseURL}${key}.json?auth=${authKey}`, data)
}

module.exports = {
    list,
    apagar,
    get,
    update,
    create
}