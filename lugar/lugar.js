const axios = require('axios');

let getLugarLatLong = async(direccion) => {

    // encodeURI nos permite encodificar los caracteres de una frase que sera enviara por un metodo get, a excepcion de los siguientes caracteres :, /? : @ & = + $ #
    let encodedUrl = encodeURI(direccion);

    //Atraves del metodo axios.get se envia la URL de la API a consultar
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCsFWADOOJTdgcr69M9A1hYGgg_HMz2PpE`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }


}

module.exports = {
    getLugarLatLong
}