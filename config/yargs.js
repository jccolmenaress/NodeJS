//traemos a yargs para ir creando nuestros propios comandos
const argv = require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption:true,//define que el parametro por consola sea obligatorio, con el check nos sirve para controlar errores antes de que se ejecute el codigo completamente, por ejemplo en este caso pusimos que el parametro se tratara como un number pero que pasa si el usuario pasa un string, entonces por eso usamos un check para tratar con estos inconveientes por medio de un callback
    describe: 'Toma la base y con esta crea la tabla de multiplicar'
}).option('l',{
    alias:'console_log',
    type: 'boolean',
    demandOption: false,
    default: false, //le doy un default al parametro
    describe: 'es una bandera que si se pasa como true imprime la tabla de multiplicar, si se pasa como false no imprime nada'
}).option('h',{
    alias: "hasta",
    type: "number",
    demandOption:false,
    default: 10,
    describe: "Hasta que número se va a multiplicar la base, por default esta hasta 10"
}).check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }
    if(isNaN(argv.h)){
        throw "El parametro de --l o --hasta tiene que ser un numero "
    }
    return true;//en dado caso no haya un error
}).argv

module.exports = argv