const salariosCol = colombia.map(person => person.salary);
// console.log(salariosCol);

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);
// console.log(salariosColSorted);

function esPar(number) {
    return (number % 2 === 0);
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personMitad1 = lista[mitad - 1];
        const personMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);
        return mediana;
    } else {
        const personMitad = lista[mitad];
        return personMitad;
    }
};

console.log(medianaSalarios(salariosColSorted));
