const lista1 = [
    100,
    200,
    300,
    500
];



function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    
    // for (var i of lista){
    //     sumaLista += + i;        
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    
    
    const promedio = sumaLista / lista.length 
    return promedio;
}