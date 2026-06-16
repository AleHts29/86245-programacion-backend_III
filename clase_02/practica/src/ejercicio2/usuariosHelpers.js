// ============================================================================
//  EJERCICIO 2 - Funciones a testear (usando los MOCKS de faker)
// ----------------------------------------------------------------------------
//  Estas son funciones "puras" que procesan una lista de usuarios. Las vamos a
//  probar pasándoles usuarios FALSOS generados con faker (mocks).
//
//  CONSIGNA -> Implementar las 3 funciones para que pasen los tests de
//  test/ejercicio2.test.js
// ============================================================================

/**
 * Devuelve solo los usuarios mayores o iguales a 18 años.
 */
export const filtrarMayoresDeEdad = (usuarios) => {
    // 👉 TODO: usar .filter() sobre el array.
};

/**
 * Devuelve un array SOLO con los emails de los usuarios.
 * Ej: [{email:"a@a.com"}, {email:"b@b.com"}] -> ["a@a.com", "b@b.com"]
 */
export const obtenerEmails = (usuarios) => {
    // 👉 TODO: usar .map() sobre el array.
};

/**
 * Cuenta cuántos usuarios tienen el rol indicado.
 * Ej: contarPorRol(usuarios, "admin") -> 3
 */
export const contarPorRol = (usuarios, rol) => {
    // 👉 TODO: filtrar por rol y devolver la cantidad (.length).
};
