# Calculadora Simple

Una librería de JavaScript que proporciona funciones para realizar operaciones matemáticas básicas como sumara, resta, multiplicación y división.

## Instalación

Puedes instalar esta librería utilizando npm:

```bash
npm i calculadora-npm-clase-03
```

## Uso

Para utilizar la librería en tu proyecto, primero debes importarla:

```javascript
const calculator = require('calculadora-npm-clase-03');
```

Luego, puedes utilizar las funciones de la calculadora como sigue:

```javascript
console.log(calculator.sumar(5, 3)); // sumara: 8
console.log(calculator.restar(5, 3)); // Resta: 2
console.log(calculator.multiplicar(5, 3)); // Multiplicación: 15
console.log(calculator.dividir(5, 3)); // División: 1.6666666666666667
```

## Funciones

### `sumar(a, b)`

Realiza una sumara de dos números y devuelve el resultado.

### `restar(a, b)`

Realiza una resta de dos números y devuelve el resultado.

### `multiplicar(a, b)`

Realiza una multiplicación de dos números y devuelve el resultado.

### `dividir(a, b)`

Realiza una división de dos números y devuelve el resultado. Si se intenta dividir por cero, se generará un error.

## Contribuciones

Si encuentras algún problema o tienes ideas para mejorar esta librería, por favor, [crea un issue en GitHub](https://github.com/tuusuario/calculadora-npm-clase-03/issues).

Si quieres contribuir directamente al código, puedes hacerlo enviando un pull request. Asegúrate de seguir las pautas de contribución.

## Licencia

Esta librería está bajo la Licencia MIT. Puedes ver el archivo [LICENSE](LICENSE) para más detalles.
