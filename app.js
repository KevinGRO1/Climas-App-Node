const argv = require('./config/yargs.js').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima.js');

//Integrando ambas funciones
let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLong(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return (`El clima en ${coors.direccion} es de ${temp}`)


    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;

    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));

/*
//Funciones probadas por separado
lugar.getLugarLatLong(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));

clima.getClima(-12.0463731, -77.042754)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));

*/