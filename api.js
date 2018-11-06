const axios = require('axios')
const baseURL = 'https://como-fazer-ae9a4.firebaseio.com/'

const list = async (key) => {
    const content = await axios.get(`${baseURL}${key}.json`)
    if (content.data) {
        const objetos = Object.keys(content.data)
            .map(key => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })
        return objetos
    }
}

const apagar = async (key, id) => {
    await axios.delete(`${baseURL}${key}/${id}.json`)
}

const get = async (key, id) => {
    const content = await axios.get(`${baseURL}${key}/${id}.json`)
    if (content.data) {
        return {
            id: id,
            ...content.data
        }
    }
}

const update = async (key, id, data) => {
    await axios.put(`${baseURL}${key}/${id}.json`, data)
}

const create = async (key, data) => {
    await axios.post(`${baseURL}${key}.json`, data)
}

module.exports = {
    list,
    apagar,
    get,
    update,
    create
}