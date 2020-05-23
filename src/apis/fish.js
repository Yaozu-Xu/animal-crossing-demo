const axios = require('axios')

let fishApi = {}

const url = 'http://localhost:3000/fish'

fishApi.getFish = () =>
    axios.get(url)

fishApi.queryFish = (queryStr) =>
    axios.get(`${url}${queryStr}`)

export default fishApi
