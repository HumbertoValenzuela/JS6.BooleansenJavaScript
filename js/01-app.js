// 1. Crear y Comparar Booleans
// 2. Más sobre Comparar Booleans
const boolean1 = true;
const boolean2 = false;

console.log(boolean1 == true);// true
console.log(boolean1 == "true");// false
console.log(boolean1 === boolean2); //false

const boolean4 = new Boolean(true);
console.log(typeof boolean4); // Object
