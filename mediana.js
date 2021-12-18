const lista1 = [
    100, 
    200,
    500,
    400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);


function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedio = (elemento1 + elemento2) / 2;

    mediana = promedio;

} else {
    mediana =  lista1[mitadLista1];
}


/*

Reto 1: Crear funciones para calcular la mediana de cualquier
lista

Reto 2: Ordenar la lista de números

Nota* = Debes usar el método Array.sort()