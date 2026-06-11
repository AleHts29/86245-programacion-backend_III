import express from 'express';
import compression from 'express-compression';


import suma from './suma.js';
import compressionRouter from './router/compressionRouter.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// app.use(compression()); // Middleware de compresión para todas las rutas - GZIP

app.use(compression(
    {
        brotli: {
            enabled: true,
            zlib: {}
        }
    }
)); // Middleware de compresión para todas las rutas - BR


app.use("/compression", compressionRouter);



app.listen(3000, () => {
    console.log('Server is running on port 3000');

    // // Aqui van las pruebas
    // let testPasados = 0;
    // let testEjecutados = 0;
    // const testTotales = 4;

    // // Test 1
    // let result = escenario_01(testPasados, testEjecutados);
    // testPasados += result.pasados;
    // testEjecutados += result.ejecutados;


    // // Test 2
    // escenario_02(testPasados, testEjecutados);
    // testPasados += result.pasados;
    // testEjecutados += result.ejecutados;

    // // Test 3
    // escenario_03(testPasados, testEjecutados);
    // testPasados += result.pasados;
    // testEjecutados += result.ejecutados;


    // // Test 4
    // escenario_04(testPasados, testEjecutados);
    // testPasados += result.pasados;
    // testEjecutados += result.ejecutados;


    // // resultados
    // console.log(`\n\nTests pasados: ${testPasados} de ${testTotales} - ejecutados: ${testEjecutados}`);

});


// Escenario 01: OK
const escenario_01 = (testPasados, testEjecutados) => {
    console.log('\nTest_01::::La función debe devolver null si algún parámetro no es numérico');

    // Given
    const num1 = 5;
    const num2 = '2';


    // Then
    const result = suma(num1, num2);


    // Assert
    if (result === null) {
        // Test pasado
        testPasados++;
        console.log('Test 01 pasado');
    } else {
        // Test fallido
        console.log(`Test 01 fallido: se esperaba null pero se obtuvo ${result}`);
    }



    return { pasados: testPasados, ejecutados: testEjecutados + 1 };
}

// Escenario 02: OK
const escenario_02 = (testPasados, testEjecutados) => {
    console.log('\nTest_02::::La función debe devolver 0 si no se pasó ningún parámetr');

    // GiveN - no se pasan parámetros


    // Then
    const result = suma();


    // Assert
    if (result === 0) {
        // Test pasado
        testPasados++;
        console.log('Test 02 pasado');
    } else {
        // Test fallido
        console.log(`Test 02 fallido: se esperaba 0 pero se obtuvo ${result}`);
    }



    return { pasados: testPasados, ejecutados: testEjecutados + 1 };
}

// Escenario 03: OK -- Caminito feliz
const escenario_03 = (testPasados, testEjecutados) => {
    console.log('\nTest_03::::La función debe poder realizar la suma correctamente');

    // Given
    const num1 = 5;
    const num2 = 3;


    // Then
    const result = suma(num1, num2);


    // Assert
    if (result === 8) {
        // Test pasado
        testPasados++;
        console.log('Test 03 pasado');
    } else {
        // Test fallido
        console.log(`Test 03 fallido: se esperaba 8 pero se obtuvo ${result}`);
    }



    return { pasados: testPasados, ejecutados: testEjecutados + 1 };
}



// La función debe poder hacer la suma con cualquier cantidad de números
const escenario_04 = (testPasados, testEjecutados) => {
    console.log('\nTest_04::::La función debe poder hacer la suma con cualquier cantidad de números');

    // Given
    const numerosEntrada = [1, 2, 3, 4, 5];

    // Then
    const result = suma(...numerosEntrada);


    // Assert
    if (result === 15) {
        // Test pasado
        testPasados++;
        console.log('Test 04 pasado');
    } else {
        // Test fallido
        console.log(`Test 04 fallido: se esperaba 15 pero se obtuvo ${result}`);
    }


    return { pasados: testPasados, ejecutados: testEjecutados + 1 };
}