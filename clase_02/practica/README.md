# Clase 02 - Práctica: TDD y Mocks

## 🎯 Objetivos
1. Entender y aplicar el concepto de **TDD** (Test Driven Development).
2. Comprender el concepto de **Mocks**.
3. Realizar un desarrollo práctico de **Mocking**.

En la teoría vimos cómo probar la función `suma` **a mano** (escenarios *Given / When / Then* con contadores de tests pasados). Acá seguimos con esa misma idea de **tests manuales** (sin instalar frameworks de testing), y sumamos **@faker-js/faker** para generar datos falsos (mocks).

---

## 🧠 Repaso de conceptos

### ¿Qué es TDD?
Es escribir el **test ANTES** que el código. El ciclo es:

1. 🔴 **ROJO** — Escribo un test que falla (el código todavía no hace lo que debe).
2. 🟢 **VERDE** — Escribo el código **mínimo** para que el test pase.
3. 🔵 **REFACTOR** — Mejoro el código sin romper los tests.

Y se repite, de a un test por vez.

### ¿Qué es un Mock?
Un **mock** es un dato u objeto **falso** que creamos para nuestras pruebas, imitando a uno real. Sirve para **no depender** de cosas externas (una base de datos, una API, internet) al momento de testear. Con `faker` generamos cientos de datos falsos realistas al instante.

---

## ⚙️ Preparación

```bash
cd clase_02/practica
npm install
```

Comandos disponibles:

```bash
npm run test:ej1   # corre los tests del ejercicio 1
npm run test:ej2   # corre los tests del ejercicio 2
npm run test:ej3   # corre los tests del ejercicio 3
npm test           # corre los tres
```

> Al principio los tests van a estar en 🔴 **rojo**: es lo esperado. Tu objetivo es completar el código de la carpeta `src/` hasta ponerlos en 🟢 **verde**.

---

## 📁 Estructura

```
practica/
├── src/
│   ├── helpers/runner.js          # mini "framework" de testing manual (ya hecho)
│   ├── ejercicio1/descuento.js    # 👉 TODO  (Ejercicio 1 - TDD)
│   ├── ejercicio2/
│   │   ├── usuariosMock.js        # 👉 TODO  (generador de mocks con faker)
│   │   └── usuariosHelpers.js     # 👉 TODO  (funciones a testear)
│   └── ejercicio3/
│       ├── usuariosDaoMock.js     # DAO mock (ya hecho)
│       └── usuariosService.js     # 👉 TODO  (Ejercicio 3 - service)
├── test/                          # los tests (ya escritos, no hace falta tocarlos*)
└── solucion/                      # solución de referencia (mirar solo si te trabás)
```
\* salvo el "TU TURNO" del Ejercicio 1, donde SÍ tenés que escribir un test.

---

## ✍️ Ejercicios

### Ejercicio 1 — TDD (`npm run test:ej1`)
Los tests **ya están escritos** en `test/ejercicio1.test.js`. Implementá la función
`aplicarDescuento(precio, porcentaje)` en `src/ejercicio1/descuento.js` para que pasen
todos, **de a uno por vez** (viví el ciclo rojo → verde).

Reglas:
- Devuelve `null` si `precio` o `porcentaje` no son números.
- Devuelve `null` si el porcentaje es menor a 0 o mayor a 100.
- Devuelve el mismo precio si el porcentaje es 0.
- Calcula el precio final. Ej: `aplicarDescuento(100, 20)` → `80`.

**TU TURNO (TDD completo):** al final del archivo de test hay un hueco para que
escribas **vos** un test nuevo (ej: 100% de descuento, o decimales). Primero el
test (🔴), después asegurate de que tu código lo haga pasar (🟢).

### Ejercicio 2 — Mocks con faker (`npm run test:ej2`)
1. Completá `generarUsuario()` en `src/ejercicio2/usuariosMock.js` para que devuelva
   un usuario **falso** usando faker (`id`, `nombre`, `email`, `edad`, `rol`).
2. Implementá las 3 funciones de `src/ejercicio2/usuariosHelpers.js`
   (`filtrarMayoresDeEdad`, `obtenerEmails`, `contarPorRol`).

Fijate en los tests cómo se usan **dos tipos de mocks**: unos *controlados* (a mano,
para predecir el resultado) y otros *generados* con faker (para probar con volumen).

### Ejercicio 3 — Mocking práctico: Service + DAO (`npm run test:ej3`)
Este es el más cercano a un proyecto real. Implementá los métodos de
`src/ejercicio3/usuariosService.js`:
- `obtenerUsuarios()` → pide todos al DAO.
- `obtenerAdultos()` → pide todos y filtra `edad >= 18`.
- `crearUsuario(usuario)` → lanza `Error("Email inválido")` si no hay email; si no, crea.

La clave: el `service` recibe el DAO por el **constructor** (inyección de
dependencias). En los tests le inyectamos un **DAO mock** (`usuariosDaoMock.js`) en
vez de una base de datos real. La lógica del service es la misma; lo único que
cambia es de dónde salen los datos. **Eso es mocking.**

---

## ✅ ¿Cómo sé que terminé?
Cuando corras `npm test` y los tres ejercicios den **Fallados: 0**.

> 💡 La carpeta `solucion/` tiene las respuestas. Usala solo para verificar o si
> quedaste trabado: se aprende mucho más peleándola un rato primero.
