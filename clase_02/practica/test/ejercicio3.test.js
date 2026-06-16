// ============================================================================
//  TESTS - EJERCICIO 3 (Mocking práctico: Service + DAO mock)
// ----------------------------------------------------------------------------
//  Corré este archivo con:   npm run test:ej3
//  (Antes corré `npm install` para tener faker disponible.)
//
//  Fijate el patrón:
//   1. Creamos un DAO MOCK (la base de datos falsa).
//   2. Se lo INYECTAMOS al service por el constructor.
//   3. Probamos la lógica del service SIN tocar una base de datos real.
//
//  Como el service usa async/await, acá usamos `testAsync` y `await`.
// ============================================================================

import { describe, testAsync, assertEquals, assertTrue, resumen } from "../src/helpers/runner.js";
import UsuariosDaoMock from "../src/ejercicio3/usuariosDaoMock.js";
import UsuariosService from "../src/ejercicio3/usuariosService.js";

const main = async () => {
    describe("Ejercicio 3 - obtenerUsuarios");

    await testAsync("Devuelve todos los usuarios que tiene el DAO", async () => {
        // Given -> DAO mock con 5 usuarios falsos
        const dao = new UsuariosDaoMock(5);
        const service = new UsuariosService(dao);
        // When
        const usuarios = await service.obtenerUsuarios();
        // Then
        assertEquals(usuarios.length, 5);
    });

    describe("Ejercicio 3 - obtenerAdultos");

    await testAsync("Devuelve solo los usuarios con edad >= 18", async () => {
        // Given -> usamos un DAO mock vacío y le cargamos datos controlados,
        // para poder predecir el resultado exacto.
        const dao = new UsuariosDaoMock(0);
        dao.usuarios = [
            { id: "1", nombre: "Ana", edad: 30 },
            { id: "2", nombre: "Beto", edad: 15 },
            { id: "3", nombre: "Caro", edad: 18 },
        ];
        const service = new UsuariosService(dao);
        // When
        const adultos = await service.obtenerAdultos();
        // Then
        assertEquals(adultos.length, 2);
    });

    describe("Ejercicio 3 - crearUsuario");

    await testAsync("Crea el usuario cuando el email es válido", async () => {
        const dao = new UsuariosDaoMock(0);
        const service = new UsuariosService(dao);
        // When
        const nuevo = await service.crearUsuario({ nombre: "Nuevo", email: "nuevo@mail.com" });
        // Then -> el usuario creado tiene un id asignado por el DAO
        assertTrue(typeof nuevo.id === "string", "el usuario creado debería tener un id");
        // y quedó guardado en el DAO
        const todos = await service.obtenerUsuarios();
        assertEquals(todos.length, 1);
    });

    await testAsync("Lanza un error si el email está vacío", async () => {
        const dao = new UsuariosDaoMock(0);
        const service = new UsuariosService(dao);
        let huboError = false;
        try {
            await service.crearUsuario({ nombre: "SinEmail", email: "" });
        } catch (error) {
            huboError = true;
            assertEquals(error.message, "Email inválido");
        }
        assertTrue(huboError, "Se esperaba que lanzara un error y no lo hizo");
    });

    resumen();
};

main();
