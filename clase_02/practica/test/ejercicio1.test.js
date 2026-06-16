// ============================================================================
//  TESTS - EJERCICIO 1 (TDD)
// ----------------------------------------------------------------------------
//  Corré este archivo con:   npm run test:ej1
//
//  Al principio van a FALLAR todos (fase 🔴 roja) porque la función
//  `aplicarDescuento` todavía no está implementada. A medida que la completás
//  en src/ejercicio1/descuento.js, los tests van a ir poniéndose en 🟢 verde.
// ============================================================================

import { describe, test, assertEquals, resumen } from "../src/helpers/runner.js";
import aplicarDescuento from "../src/ejercicio1/descuento.js";

describe("Ejercicio 1 - aplicarDescuento (TDD)");

// Test 1
test("Devuelve null si el precio NO es un número", () => {
    // Given
    const precio = "100";
    const porcentaje = 20;
    // When
    const resultado = aplicarDescuento(precio, porcentaje);
    // Then
    assertEquals(resultado, null);
});

// Test 1.b
test("Devuelve null si el porcentaje NO es un número", () => {
    const resultado = aplicarDescuento(100, "20");
    assertEquals(resultado, null);
});

// Test 2
test("Devuelve null si el porcentaje es negativo", () => {
    const resultado = aplicarDescuento(100, -5);
    assertEquals(resultado, null);
});

// Test 2.b
test("Devuelve null si el porcentaje es mayor a 100", () => {
    const resultado = aplicarDescuento(100, 150);
    assertEquals(resultado, null);
});

// Test 3
test("Devuelve el mismo precio si el porcentaje es 0", () => {
    const resultado = aplicarDescuento(100, 0);
    assertEquals(resultado, 100);
});

// Test 4 (caminito feliz)
test("Calcula correctamente: 100 con 20% de descuento = 80", () => {
    const resultado = aplicarDescuento(100, 20);
    assertEquals(resultado, 80);
});

// Test 4.b
test("Calcula correctamente: 250 con 50% de descuento = 125", () => {
    const resultado = aplicarDescuento(250, 50);
    assertEquals(resultado, 125);
});

// ----------------------------------------------------------------------------
// 👉 TEST 5 - TU TURNO (TDD completo: primero el test, después el código)
//    Escribí ACÁ un test nuevo para un caso que no esté cubierto.
//    Ideas: ¿qué pasa con un 100% de descuento? ¿con decimales (99.99, 10)?
// ----------------------------------------------------------------------------
// test("...descripción de tu caso...", () => {
//     const resultado = aplicarDescuento(/* ... */);
//     assertEquals(resultado, /* esperado */);
// });

resumen();
