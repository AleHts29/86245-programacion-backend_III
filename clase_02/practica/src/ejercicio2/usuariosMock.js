// ============================================================================
//  EJERCICIO 2 - MOCKS con @faker-js/faker
// ----------------------------------------------------------------------------
//  ¿Qué es un MOCK? Es un dato/objeto FALSO que creamos para nuestras pruebas,
//  imitando a uno real. Así NO dependemos de una base de datos, de internet ni
//  de cargar datos a mano: generamos cientos de usuarios falsos al instante.
//
//  faker es una librería que genera datos falsos realistas (nombres, emails,
//  edades, etc). La instalás con:  npm install
//
//  CONSIGNA -> Completar `generarUsuario()` para que devuelva un objeto usuario
//  FALSO con esta forma:
//    {
//      id: string,        // un uuid
//      nombre: string,    // nombre y apellido
//      email: string,
//      edad: number,      // entre 10 y 90
//      rol: string        // "user" o "admin"
//    }
// ============================================================================

import { faker } from "@faker-js/faker";

/**
 * Genera UN usuario falso.
 * Documentación rápida de faker (v9):
 *   faker.string.uuid()
 *   faker.person.fullName()
 *   faker.internet.email()
 *   faker.number.int({ min: 10, max: 90 })
 *   faker.helpers.arrayElement(["user", "admin"])
 */
export const generarUsuario = () => {
    // 👉 TODO: devolvé un objeto usuario usando faker (ver la forma de arriba).
    return {
        // id: ...,
        // nombre: ...,
        // email: ...,
        // edad: ...,
        // rol: ...,
    };
};

/**
 * Genera un ARRAY de `cantidad` usuarios falsos.
 * Esta función YA está hecha: reutiliza generarUsuario().
 */
export const generarUsuarios = (cantidad = 10) => {
    const usuarios = [];
    for (let i = 0; i < cantidad; i++) {
        usuarios.push(generarUsuario());
    }
    return usuarios;
};
