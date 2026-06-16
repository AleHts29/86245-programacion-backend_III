// ============================================================================
//  EJERCICIO 3 - SERVICE (la lógica de negocio)
// ----------------------------------------------------------------------------
//  El SERVICE contiene la lógica de negocio y NO sabe de dónde salen los datos:
//  recibe un DAO por el constructor (inyección de dependencias) y le pide los
//  datos a ese DAO. En producción le pasaríamos el DAO real (Mongo); en los
//  tests le pasamos el DAO MOCK. La lógica del service es la misma en los dos
//  casos: ESA es la gracia del mocking.
//
//  CONSIGNA -> Implementar los métodos para que pasen los tests de
//  test/ejercicio3.test.js. Ojo: el DAO es asíncrono (usa async/await).
// ============================================================================

export default class UsuariosService {
    // Recibimos el DAO como dependencia. ¡No lo creamos acá adentro!
    constructor(dao) {
        this.dao = dao;
    }

    /**
     * Devuelve TODOS los usuarios pidiéndoselos al DAO.
     */
    async obtenerUsuarios() {
        // 👉 TODO: return await this.dao.getAll();
    }

    /**
     * Devuelve solo los usuarios adultos (edad >= 18).
     * Pista: primero pedí todos al DAO, después filtrá.
     */
    async obtenerAdultos() {
        // 👉 TODO
    }

    /**
     * Crea un usuario, pero SOLO si el email no está vacío.
     * - Si el email es inválido (vacío, null, undefined) -> lanzar un Error
     *   con el mensaje: "Email inválido"
     * - Si es válido -> usar this.dao.create(usuario) y devolver el resultado.
     */
    async crearUsuario(usuario) {
        // 👉 TODO
    }
}
