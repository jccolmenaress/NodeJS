const fs = require("fs");
const crearArchivo = (number, l, h) => {
    return new Promise((resolve, reject) => {
        let salida = "";
        for (let i = 1; i <= h; i++) {
        salida += `${number} * ${i} = ${number * i}\n`;
        }
        if(l === true) {
            console.log(salida);
        }
        

        fs.writeFileSync(`./salida/tabla${number}.txt`, salida);
        resolve(`Tabla del ${number} creada!`);
    });
};


module.exports = { crearArchivo };
