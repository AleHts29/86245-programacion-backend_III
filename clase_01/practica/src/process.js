import { Command } from 'commander';

const program = new Command(); //Crea la instancia de comandos de commander.

program
    .option('-d', 'Variable para debug', false) //primero va la variable, luego la descripcion y al final puede ir un valor por defecto.

    .option('-p <port>', 'Puerto del servidor', 9090) //donde indicamos que <port> es el valor del puerto a asignar.
    .option('--mode <mode>', 'Modo de trabajo', 'develop')

    .requiredOption('-u <user>', 'Usuario que va a utilizar el aplicativo.', 'No se ha declarado un usuario.');//RequireOption usa un mensaje por defecto si no está presente la opción.

program.parse(); //Parsea los comandos y valida si son correctos.

// console.log("Options: ", program.opts());
// console.log("Mode Option: ", program.opts().mode);
// console.log("Remaining arguments: ", program.args);


// 2do - Listeners

process.on("exit", code => {
    console.log("El proceso va a finalizar con el código: " + code);
});


process.on("uncaughtException", error => { // Listener para excepciones no controladas.
    console.log("Ha ocurrido una excepción no controlada: " + error);
    process.exit(1); //Finaliza el proceso con un código de error.
});


process.on("message", message => { //Listener para mensajes recibidos por el proceso.
    console.log("Mensaje recibido por el proceso: " + message);
    //Aquí se pueden realizar acciones específicas según el mensaje recibido.
});

export default program;