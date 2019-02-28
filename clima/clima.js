const axios = require('axios');

const getClima = async(lati, longi) => {

    let lat = encodeURIComponent(lati);
    let long = encodeURIComponent(longi);

    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=8edb11656207a6e9ce88621e0fae3f90`)

    if (result.data.message === 'Nothing to geocode') {
        throw new Error(`No se puede ubicar una ciudad para las cooredenadas ${lat} y ${long}`);
    } else {
        let temp = result.data.main;

        return temp.temp;
    }


}

module.exports = {
    getClima
}