// ============================================================================
//  TESTS - EJERCICIO 2 (Mocks con faker)
// ----------------------------------------------------------------------------
//  Corré este archivo con:   npm run test:ej2
//  (Antes corré `npm install` para tener faker disponible.)
//
//  Acá usamos MOCKS de dos formas:
//   A) Mocks "controlados": objetos que armamos a mano con valores fijos, para
//      poder predecir el resultado exacto y comparar (assertEquals).
//   B) Mocks "generados": cientos de usuarios falsos con faker, para probar que
//      la función funciona con volumen y con datos variados.
// ============================================================================

import { describe, test, assertEquals, assertTrue, resumen } from "../src/helpers/runner.js";
import { generarUsuario, generarUsuarios } from "../src/ejercicio2/usuariosMock.js";
import {
    filtrarMayoresDeEdad,
    obtenerEmails,
    contarPorRol,
} from "../src/ejercicio2/usuariosHelpers.js";

describe("Ejercicio 2 - El mock con faker genera bien los datos");

test("generarUsuario() devuelve un objeto con todas las propiedades esperadas", () => {
    const usuario = generarUsuario();
    assertTrue(typeof usuario.id === "string", "id debería ser un string");
    assertTrue(typeof usuario.nombre === "string", "nombre debería ser un string");
    assertTrue(typeof usuario.email === "string", "email debería ser un string");
    assertTrue(typeof usuario.edad === "number", "edad debería ser un number");
    assertTrue(
        usuario.rol === "user" || usuario.rol === "admin",
        "rol debería ser 'user' o 'admin'"
    );
});

test("generarUsuarios(50) devuelve un array de 50 usuarios", () => {
    const usuarios = generarUsuarios(50);
    assertEquals(usuarios.length, 50);
});

describe("Ejercicio 2 - filtrarMayoresDeEdad (con mocks controlados)");

test("Filtra correctamente dejando solo los mayores o iguales a 18", () => {
    // Given -> mock controlado (valores fijos para poder predecir el resultado)
    const usuarios = [
        { nombre: "Ana", edad: 25 },
        { nombre: "Beto", edad: 17 },
        { nombre: "Caro", edad: 18 },
        { nombre: "Dani", edad: 10 },
    ];
    // When
    const resultado = filtrarMayoresDeEdad(usuarios);
    // console.log("Resultado: ", resultado);

    // Then
    assertEquals(resultado.length, 2);
    assertEquals(resultado[0].nombre, "Ana");
    assertEquals(resultado[1].nombre, "Caro");
});

describe("Ejercicio 2 - obtenerEmails");

test("Devuelve un array solo con los emails", () => {
    const usuarios = [
        { email: "ana@mail.com" },
        { email: "beto@mail.com" },
    ];
    const resultado = obtenerEmails(usuarios);
    // console.log("Resultado: ", resultado);



    assertEquals(resultado, ["ana@mail.com", "beto@mail.com"]);
});

describe("Ejercicio 2 - contarPorRol");

test("Cuenta correctamente los usuarios developer", () => {
    const usuarios = [
        { rol: "admin" },
        { rol: "developer" },
        { rol: "admin" },
        { rol: "user" },
    ];
    assertEquals(contarPorRol(usuarios, "developer"), 1, "Debería haber 1 developer");
});

resumen();
