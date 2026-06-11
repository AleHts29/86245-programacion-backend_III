// export default (num1, num2) => {

//     console.log('Ejecutando suma... num1:', num1, 'num2:', num2);

//     if (!num1 && !num2) return 0;

//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return null
//     }


//     return num1 + num2;
// }


// export default (...numeros) => {
//     console.log('Ejecutando suma... numeros:', numeros);

//     //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
//     if (numeros.length === 0) return 0;

//     //Test 1: La función debe devolver null si algun parametro no es numérico.
//     for (let i = 0; i < numeros.length; i++) {
//         if (typeof numeros[i] !== 'number') {
//             return null;
//         }
//     }


//     //Test 3-4: La función debe poder realizar la suma correctamente.
//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         suma += numeros[i];
//     }
//     return suma;

// }



// --> REFACTOR
export default (...numbers) => {
    console.log("Entrando a la suma con arreglo de numeros: ");
    console.log(numbers);

    if (numbers.length === 0) return 0;

    if (!numbers.every(num => typeof num === "number")) return null;

    let result = 0;
    result = numbers.reduce((prev, current) => prev + current);

    console.log("Resultado de la suma:");
    console.log(result);
    return result;
};