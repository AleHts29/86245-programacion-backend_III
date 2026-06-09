import express from 'express';
import cluster from 'cluster';
import os from 'os';

import config from './config/config.js';

// console.log("Soy el proceso principal??");
// console.log(cluster.isPrimary);

// console.log("Objeto process.env: ", process.env);
// console.log("Objeto process.env.PORT: ", process.env.PORT);
// console.log("Argv: ", process.argv.slice(2));


// Ejemplo 01
if (cluster.isPrimary) {
    console.log("Hola, soy el proceso padre: ", process.pid);
    const numCPUs = os.cpus().length;
    console.log("Numero de CPUs: ", numCPUs);


    // el proceso padre crea un proceso hijo por cada núcleo de la máquina
    for (let i = 0; i < numCPUs - 1; i++) {
        cluster.fork(); // me crea un proceso hijo
    }

} else {
    const app = express();

    app.get("/", (req, res) => {
        res.send(`Hola desde el proceso ${process.pid}`);
    });

    const PORT = config.port;
    // const PORT = process.argv.slice(2)[1];
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el proceso ${process.pid} - Puerto ${PORT}`);
    });
}
