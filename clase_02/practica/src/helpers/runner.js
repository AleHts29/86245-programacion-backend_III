// ============================================================================
//  MINI "FRAMEWORK" DE TESTING MANUAL
// ----------------------------------------------------------------------------
//  En la teoría vimos cómo probar la función `suma` a mano: ejecutábamos la
//  función, comparábamos el resultado con lo esperado y contábamos cuántos
//  tests pasaban. Esto es EXACTAMENTE lo que hace un framework de testing por
//  dentro: no es magia, son funciones que comparan valores y avisan si algo
//  no coincide.
//
//  Acá juntamos ese patrón en 4 funciones reutilizables para no repetir
//  código en cada ejercicio. NO necesitamos instalar nada para esto.
// ============================================================================

let pasados = 0;
let fallados = 0;

/**
 * Ejecuta un test. Si la función `fn` lanza un error, el test se marca como
 * fallado. Si no lanza nada, se marca como pasado.
 */
export const test = (descripcion, fn) => {
    try {
        fn();
        pasados++;
        console.log(`  ✅ PASÓ  -> ${descripcion}`);
    } catch (error) {
        fallados++;
        console.log(`  ❌ FALLÓ -> ${descripcion}`);
        console.log(`             ${error.message}`);
    }
};

/**
 * Igual que `test`, pero para funciones ASÍNCRONAS (con async/await).
 * Acordate de usar `await testAsync(...)` cuando lo llames.
 */
export const testAsync = async (descripcion, fn) => {
    try {
        await fn();
        pasados++;
        console.log(`  ✅ PASÓ  -> ${descripcion}`);
    } catch (error) {
        fallados++;
        console.log(`  ❌ FALLÓ -> ${descripcion}`);
        console.log(`             ${error.message}`);
    }
};

/** Agrupa visualmente un conjunto de tests. */
export const describe = (titulo) => {
    console.log(`\n=== ${titulo} ===`);
};

/** Verifica que dos valores sean iguales (compara también objetos/arrays). */
export const assertEquals = (obtenido, esperado, mensaje) => {
    const a = JSON.stringify(obtenido);
    const e = JSON.stringify(esperado);
    if (a !== e) {
        throw new Error(mensaje || `Se esperaba ${e} pero se obtuvo ${a}`);
    }
};

/** Verifica que una condición sea verdadera. */
export const assertTrue = (condicion, mensaje) => {
    if (condicion !== true) {
        throw new Error(mensaje || `Se esperaba 'true' pero se obtuvo '${condicion}'`);
    }
};

/** Imprime el resumen final. Llamala al terminar de correr todos los tests. */
export const resumen = () => {
    const total = pasados + fallados;
    console.log(`\n------------------------------------------------------`);
    console.log(`RESULTADO -> Total: ${total} | Pasados: ${pasados} | Fallados: ${fallados}`);
    console.log(`------------------------------------------------------\n`);
    pasados = 0;
    fallados = 0;
};
