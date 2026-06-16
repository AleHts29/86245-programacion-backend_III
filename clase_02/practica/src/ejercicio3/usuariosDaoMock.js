// ============================================================================
//  EJERCICIO 3 - DAO MOCK (la "base de datos" falsa)
// ----------------------------------------------------------------------------
//  En un proyecto real, el DAO (Data Access Object) es la capa que habla con
//  la base de datos (Mongo, SQL, etc). Para TESTEAR no queremos depender de una
//  base de datos real (es lenta, hay que levantarla, los datos cambian...).
//
//  La solución: crear un DAO FALSO (mock) que se comporta IGUAL por fuera
//  (tiene los mismos métodos), pero por dentro guarda los usuarios en memoria
//  y los genera con faker. El `usuariosService` no se entera de la diferencia:
//  le da igual si por debajo hay Mongo o un mock. A eso le decimos
//  "inyección de dependencias".
//
//  Este archivo YA está completo. Tu trabajo está en usuariosService.js
// ============================================================================

import { faker } from "@faker-js/faker";

export default class UsuariosDaoMock {
    constructor(cantidadInicial = 5) {
        // "base de datos" en memoria
        this.usuarios = [];
        for (let i = 0; i < cantidadInicial; i++) {
            this.usuarios.push(this.#generarUsuarioFalso());
        }
    }

    // método privado: arma un usuario falso con faker
    #generarUsuarioFalso() {
        return {
            id: faker.string.uuid(),
            nombre: faker.person.fullName(),
            email: faker.internet.email(),
            edad: faker.number.int({ min: 10, max: 90 }),
        };
    }

    // imita a un dao.getAll() -> devuelve todos los usuarios
    async getAll() {
        return this.usuarios;
    }

    // imita a un dao.create() -> agrega un usuario y lo devuelve
    async create(usuario) {
        const nuevo = { id: faker.string.uuid(), ...usuario };
        this.usuarios.push(nuevo);
        return nuevo;
    }

    // imita a un dao.getById()
    async getById(id) {
        return this.usuarios.find((u) => u.id === id) || null;
    }
}
