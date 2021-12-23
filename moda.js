/* 
    1.- Crear un array que almacene el input del html                       (Ready)
    2.- Crear / Enlazar un función que añada (.push) elementos al Array     (Ready)
    3.- Crear una función que muestre los elementos en el DOM               (Ready)
    4.- Crear / Enlazar una funcion que saque el resultado                  (Ready)

    Bonus.- Crear un sistema que si antes pusiste "Nah" Despues diga "Bueno ya </brs>" (Goood Yeah => Ready)
*/

let mensajeActivado = 0;

let listaElementos = [];

function añadirElementos(){
    const e = document.getElementById("arreglo");
    const elemento = parseInt(e.value);
    listaElementos.push(elemento);

    const parrafo = document.getElementById("parrafoArreglo");
    parrafo.innerText += elemento + "/ ";

}

function calcular(){
    const parrafo = document.getElementById("parrafoBoton");
    const bueno = document.getElementById("BuenoYa");
    var resultado = moda(listaElementos);
    parrafo.innerText = resultado;

    if(mensajeActivado){
        bueno.innerText = "Bueno ya, te lo muestro";
    }
}

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


function mostrarMensaje(){
    const mensaje = document.getElementById("parrafoBoton");
    mensaje.innerText = "Si no quieres, no nomas. Y para esto trabajé tanto =,(";
    mensajeActivado = 1;
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