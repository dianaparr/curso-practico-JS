// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];


function calcularMediaAritmetica (lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // };

    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};

// alternativas para los ciclos for -> métodos de array
// reduce: suma cada uno de los elementos: el 1 con el 2, el 2 con el 3 , el 3 con el 4, etc.
