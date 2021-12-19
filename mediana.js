function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};

let mediana;

function esPar(lista) {
    if (lista.length % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

function calculoMediana(lista) {
    lista.sort((a,b) => a - b);

    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elem1 = lista[mitadLista - 1];
        const elem2 = lista[mitadLista];
        const promedioelem1y2 = calcularMediaAritmetica([
            elem1,
            elem2
        ]);
        mediana = promedioelem1y2;
    } else {
        mediana = lista[mitadLista];
    };

    return mediana;
};




// const lista1 = [
    //     100,
    //     200,
//     500,
//     400000000
// ];

// const sortList = (lista) => {
//     lista.sort((a, b) => a - b);
//     return lista;
// }
