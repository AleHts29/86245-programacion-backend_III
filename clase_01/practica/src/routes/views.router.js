import { Router } from 'express';
import { fork } from 'child_process';

const router = Router();

let result = 0;
router.get("/count", (req, res) => {
    res.render("index", { count: result++ });
});



// Proceso bloqueante - Operación compleja
router.get("/suma", (req, res) => {
    res.send(`El resultado de la suma es: ${operacionCompleja()}`);
});


const operacionCompleja = () => {
    let result = 0;
    for (let i = 0; i < 5e9; i++) {
        result += i;
    }
    return result;
}



// Proceso no bloqueante - Fork
router.get("/suma-fork", (req, res) => {
    const child = fork("./src/forks/operations.js");
    child.send("Iniciar operación compleja"); //Envía un mensaje al proceso hijo para iniciar la operación.

    // escuchamos el mensaje que nos envía el proceso hijo con el resultado de la operación.
    child.on("message", result => {
        res.send(`El resultado de la suma con fork es: ${result}`);
    })
});


export default router;