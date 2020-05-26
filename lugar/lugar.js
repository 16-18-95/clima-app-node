const axios = require('axios');


const getLugarLatLng = async(dir) => {


    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '2b29a75926msha8049061a285043p1153e2jsn0fda42d5f700' }
    });



    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.long;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}