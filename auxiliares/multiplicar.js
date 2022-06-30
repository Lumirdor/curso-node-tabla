const fs = require('fs');

const crearArchivo = async (base)=>{

   // return new Promise ((resolve, reject) => {

try{
    let salida = '';
    for (let i = 1; i<=10; i++) salida += `${base} x ${i} = ${base*i}\n`;
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    //console.log(`Tabla del ${base} creada`);
    return `tabla-${base}.txt`;
}
catch (error){ throw (`El archivo tabla-${base}.txt no pudo ser creado`)};


    // console.log(`================================================`);
    // console.log(`===============  Tabla del ${base}   =================`);
    // console.log(`================================================\n`);

   

    // console.log(salida);
    // console.log(`================================================\n`);

   
   // });
}

//Con promesas

const crearArchivoProm = (base, listar, hasta)=>{

return new Promise ((resolve, reject) => {

 
    let salida = '';
    let consola = '';
    for (let i = 1; i<=hasta; i++){
         salida += (`${base} x ${i} = ${base*i}\n`);
         consola += (`${base}` + `x`.red + `${i} = ` + `${base*i}\n`.underline.green);
    }
    if(listar){
    console.log(`================================================`.rainbow);
    console.log(`===============  Tabla del`.trap, `${base}`.red   ,`=================`);
    console.log(`================================================\n`.rainbow);
    console.log(consola);
    console.log(`================================================\n`.inverse);
    }

    try{
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    resolve(`tabla-${base}.txt`);
    }
    catch(error){
    reject (`Error: ${error} El archivo tabla-${base}.txt no pudo ser creado`);
    }
     });
 }

module.exports = {
    crearArchivo,
    crearArchivoProm
}




    
// fs.writeFile(`tabla-${base}.txt`,salida,(error)=>{
//     if(error)throw error;
//     console.log(`Tabla del ${base} creada`);
// });

//fs.writeFile(file, data[, options], callback)
// fs.writeFileSync(file, data[, options])
// fs.writeSync(fd, buffer[, offset[, length[, position]]])
// fs.writeSync(fd, string[, position[, encoding]])
// fs.writevSync(fd, buffers[, position])