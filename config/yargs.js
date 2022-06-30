// const { boolean } = require('yargs');
var argv = require('yargs')
.option('b', {
    alias: 'base',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
    type: 'number'
})
.option('l',{
    alias: 'listar',
    demandOption: true,
    type: 'boolean',
    describe: 'Muestra la informacion por consola',
    default: false
})
.option('h',{
    alias: 'hasta',
    demandOption: true,
    type: 'number',
    describe: 'Hasta que numero va a multiplicar',
    //default: false
})
.check((argv, options)=>{
    if(isNaN(argv.b)){
        throw 'La base debe ser un numero';
    }
    if(isNaN(argv.h)){
        throw 'Hasta donde repetir debe ser un numero';
    }
    return true;
})
.argv;

module.exports = argv;
