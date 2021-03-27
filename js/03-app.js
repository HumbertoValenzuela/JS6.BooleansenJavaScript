// 3. Buenas practicas a la hora de evaluar un Boolean

const autenticado = true;

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