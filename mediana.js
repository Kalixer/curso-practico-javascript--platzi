// const lista1 = [
//     100, 
//     200,
//     500,
//     400000000,
// ];



let listaNumeros = [];
const elementos_array = document.getElementById("elementos_Array");


function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}


function añadir(){
    var number = document.getElementById("number");
    var numero = parseInt(number.value);
    
    listaNumeros.push(numero);
    console.log(listaNumeros);

    elementos_array.innerText += listaNumeros[listaNumeros.length - 1] + "_ ";
}


function calcular(){

    const arrayDesordenado = listaNumeros;

    const array = arrayDesordenado.sort(
        function (a, b){
            return a - b;
        }
    )
    console.log(array);

    const mitadLista = parseInt(array.length / 2);

    let mediana;

    if(esPar(array.length)){
        const elemento1 = array[mitadLista - 1];
        const elemento2 = array[mitadLista];

        const promedio = (elemento1 + elemento2) / 2;

        mediana = promedio;

    } else {
        mediana =  array[mitadLista];
    }

    console.log(mediana)
}