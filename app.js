
//usamos destructuracion
const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


//para limpiar la consola 
console.clear()


//vamos a pasar el parametro de la funcion por consola (esta parte es solo con fines educativos ya que para esto existe yargs)
/*const [,,arg3 = 'base=5'] = process.argv
const [,base = 5 ]= arg3.split('=')
console.log(base);*/
//const []= arg3
//const number = 9
//console.log(process.argv);
//console.log(argv);
console.log('yargs ',argv.base);




crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
