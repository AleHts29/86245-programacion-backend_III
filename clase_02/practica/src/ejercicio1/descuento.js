// ============================================================================
//  EJERCICIO 1 - TDD (Test Driven Development)
// ----------------------------------------------------------------------------
//  Recordá el ciclo de TDD:
//    1. 🔴 ROJO    -> Escribo un test que falla (la función todavía no existe
//                     o no hace lo que debe).
//    2. 🟢 VERDE   -> Escribo el código MÍNIMO para que el test pase.
//    3. 🔵 REFACTOR -> Mejoro el código sin romper los tests.
//
//  Los tests ya están escritos en: test/ejercicio1.test.js
//  Tu trabajo es implementar esta función para que TODOS los tests pasen.
//
//  CONSIGNA -> Implementar `aplicarDescuento(precio, porcentaje)` que:
//    Test 1: Debe devolver `null` si `precio` o `porcentaje` NO son números.
//    Test 2: Debe devolver `null` si el porcentaje es menor a 0 o mayor a 100.
//    Test 3: Debe devolver el mismo precio si el porcentaje es 0.
//    Test 4: Debe calcular el precio final correctamente.
//            Ej: aplicarDescuento(100, 20) === 80
//    Test 5 (TU TURNO): lo agregás vos en el archivo de test. Ver el README.
// ============================================================================

const aplicarDescuento = (precio, porcentaje) => {
    // 👉 TODO: implementá la función paso a paso, haciendo pasar un test a la vez.
    //
    // Pista del orden recomendado (TDD = de a poco):
    //   1) Validar que ambos sean números (typeof ... === 'number').
    //   2) Validar el rango del porcentaje (0 a 100).
    //   3) Caso porcentaje 0.
    //   4) Calcular: precio - (precio * porcentaje / 100).


    // Test 1: Debe devolver `null` si `precio` o `porcentaje` NO son números.
    if (typeof precio !== "number" || typeof porcentaje !== "number") {
        return null;
    }
};

export default aplicarDescuento;
