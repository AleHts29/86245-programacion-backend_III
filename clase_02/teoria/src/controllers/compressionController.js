

export const compressStr = (req, res) => {
    let str = `Hola CoderHouse, esta es una cadena de texto que vamos a comprimir utilizando el algoritmo de compresión RLE.`;

    for (let i = 0; i < 5e5; i++) {
        str += ` Hola CoderHouse, esta es una cadena de texto que vamos a comprimir utilizando el algoritmo de compresión RLE.`;
    }

    res.send(str);
}