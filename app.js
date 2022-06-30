

const {crearArchivo} = require('./auxiliares/multiplicar');
const {crearArchivoProm} = require('./auxiliares/multiplicar');
const argv = require('./config/yargs');
require('colors');

//console.log(argv);
//console.log(process.argv);

//console.log('Base Yargs: ',argv.base);


//console.log('OMG Rainbows!'.rainbow); // rainbow

/*console.log(process.argv);
const [,,arg3 = 'base=5'] = process.argv;
const [,base] = arg3.split('=');
console.log(base);
*/
console.clear();

crearArchivoProm(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(`El archivo ${nombreArchivo} fue creado correctamente`.rainbow))
.catch(error=>console.log(error));




