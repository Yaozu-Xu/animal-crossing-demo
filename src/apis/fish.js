const axios = require('axios')

let fishApi = {}

const url = 'http://localhost:3000/fish'

fishApi.getFish = () =>
    axios.get(url)

export default fishApi
