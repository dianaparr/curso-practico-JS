function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};


const lista1 = [
    100,
    200,
    500,
    400000000
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elem1 = lista1[mitadLista1 - 1];
    const elem2 = lista1[mitadLista1];
    const promedioelem1y2 = calcularMediaAritmetica([
        elem1,
        elem2
    ]);
    mediana = promedioelem1y2;
} else {
    mediana = lista1[mitadLista1];
}
