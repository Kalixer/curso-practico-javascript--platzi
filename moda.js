// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1
// ]

function moda(lista){

    const listaCount = {};
    
    lista.map(
        function(elemento) {
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            } else{
                listaCount[elemento] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    )
    
    const moda = listaArray[listaArray.length - 1]

    return moda;
}





/* Otro método más reducido para encontrar la moda

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS));

*/