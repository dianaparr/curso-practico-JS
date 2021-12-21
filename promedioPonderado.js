// Un caso de uso de la media ponderada es el cálculo de notas académicas
// cuando cada materia o asignatura otorga diferentes “créditos”.

// Fórmula: donde N es note y C es credit
// [(N1*C1)+(N2*C2)+(N3*C3)] / (C1+C2+C3)

// 1. Definir el conjunto de números junto al peso de cada elemento
const notes = [
    {
        course: "Matemáticas",
        note: 10,
        credit: 2
    },
    {
        course: "OOP",
        note: 8,
        credit: 5
    },
    {
        course: "Finanzas",
        note: 7,
        credit: 5
    }
];

// 2. Multiplicar cada número de la lista por su peso, es decir, por el crédito
const notesWithCredit = notes.map(noteObj => noteObj.note * noteObj.credit);
// console.log(notesWithCredit);

// 3. Sumar todos los elementos del array de elementos multiplicados por los crpeditos correspondientes
const sumOfNotesWithCredit = notesWithCredit.reduce((sum=0, newVal) => sum + newVal);
// console.log(sumOfNotesWithCredit);

// 4. Sumar todos los pesos (créditos)
const credits = notes.map(noteObj => noteObj.credit);
// console.log(credits);
const sumOfCredits = credits.reduce((sum=0, newVal) => sum + newVal);
// console.log(sumOfCredits);

// 5. Hacer la división entre ambas “sumas”
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
console.log(promedioPonderadoNotasConCreditos);
