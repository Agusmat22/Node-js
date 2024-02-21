const {crearArchivo} = require('./helpers/multiplicar.js')
const colors = require('colors');

const argv = require('./config/yargs.js');

console.clear();

const tabla = argv.base;

const listar = argv.listar;

const cantidad = argv.hasta;





crearArchivo( tabla, listar, cantidad)
            .then( (nombreArchivo) => console.log(nombreArchivo,'creado') )
            .catch( (error) => console.log(error) );
