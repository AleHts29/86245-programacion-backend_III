process.on("message", message => {
    console.log("Mensaje recibido: " + message);

    let result = 0;
    for (let i = 0; i < 5e9; i++) {
        result += i;
    }

    process.send(result); //Envía el resultado de la operación al proceso padre.
});