const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b1914ac4d1a60d578336e8a0fb1e5702&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}