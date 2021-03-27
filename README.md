# JS6.BooleansenJavaScript
JS 6 . Booleans en JavaScript
* 1. Crear y Comparar Booleans
* 2. Más sobre Comparar Booleans
* 3. Buenas practicas a la hora de evaluar un Boolean

```javascript
const boolean1 = true;
const boolean2 = false;

console.log(boolean1 == true);// true
console.log(boolean1 == "true");// false
console.log(boolean1 === boolean2); //false

const boolean4 = new Boolean(true);
console.log(typeof boolean4); // Object

const autenticado = true;
//3. Buenas practicas a la hora de evaluar un Boolean
// Forma incorrecta
if (autenticado === true) {
    console.log('Si puedes ver amazon');    
} else {
    console.log('No puedes verlo ');
}

// Forma Correcta
if (autenticado) {
    console.log('Si puedes ver amazon');    
} else {
    console.log('No puedes verlo ');
}

// Forma Correcta
// Operador Ternario
console.log(autenticado ? 'Si puedes ver amazon' : 'no puedes ver');
```
