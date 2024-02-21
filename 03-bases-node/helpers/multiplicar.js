//imoprtamos la libreria para manipular archivos, directorios y crearlos
const fileSystem = require('fs');
const colors = require('colors');


const crearArchivo = async(base,listar,cantidad)=>{
    
    
    let salida = '';
    let consola = '';

    const nombreArchivo = `./salida/tabla-${base}.txt`


    for (let i = 1; i <= cantidad; i++) 
    {

        salida += `${base}`+` x `.red+`${i} = `+`${base*i}`.green+`\n`;
        consola += `${base}`+` x `+`${i} = `+`${base*i}`+`\n`;
        
    };

    if (listar) 
    {
        console.log('Tabla del: '.blue + colors.bgCyan(base) );

        console.log(salida);
    }
    


    //PRIMER PARAMETRO ES EL NOMBRE DEL ARCHIVO CON SU TIPO,
    //SEGUNDO PARAMETRO ES EL DATO A GUARDAR
    //TERCER PARAMETRO ES UN CALLBACK QUE VALIDARA SI OCURRE UN ERROR

    try 
    {
        fileSystem.writeFileSync(nombreArchivo,consola);
        return nombreArchivo;
        
    } catch (error) 
    {
        throw error;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}