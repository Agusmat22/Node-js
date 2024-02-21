

const argv = require('yargs')
                    .options({
                        'b':{
                            alias: 'base',
                            demandOption: true,
                            type: 'number',
                            describe: 'Es la base de la tabla de multiplicar'
                        },
                        'l':{
                            alias: 'listar',
                            demandOption: true,
                            type: 'boolean',
                            default: false,
                            describe: 'Lista la tabla de mulplicar'

                        }
                        ,
                        'h':{
                            alias: 'hasta',
                            demandOption: true,
                            type: 'number',
                            default: 10,
                            describe: 'Es el numero hasta donde deseamos que se multiplique'

                        }

                    })
                    .check( (argv, options)=>{
                        
                        if (isNaN( argv.b ) || isNaN(argv.h) ) {
                            throw new Error("Debe ingresar un numero como parametro");
                        }

                        return true;

                    })
                    .argv;

module.exports = argv;


