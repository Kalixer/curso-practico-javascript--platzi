// Hacer una funcion que evalúe el segundo npumero más grande



const lado1 = document.getElementById("Lado1");
const lado2 = document.getElementById("Lado2");
const base = document.getElementById("Base");

function evaluar(cateto1, cateto2, cateto3) {
    var tipo_de_triangulo;
    
    if(cateto1 == cateto2 && cateto1 == cateto3){
        tipo_de_triangulo = "Equilátero";
        console.log("Es Equilátero")
        return tipo_de_triangulo;
    }

    else if(cateto1 == cateto2){
        tipo_de_triangulo = "Isóceles";
        console.log("Es Isóceles");
        return tipo_de_triangulo;
    }
    else{
        tipo_de_triangulo = "Escaleno";
        console.log("Es Escaleno");
        return tipo_de_triangulo;
    }
}



// Cálculo de Altura

// alturaNormal significa que es equilátero o isóceles 
function alturaNormal(cateto, base){
    base = base / 2;
    const altura = Math.sqrt((cateto ** 2) - (base ** 2))
    console.log("Altura: " + altura)
    return altura;
}


function alturaEscaleno(cateto1, cateto2, cateto3){
    // Formula de Herón (tienes la medida de los 3 lados)
    // Var s (es la mitad del perímetro del triangulo) / s= (a+b+c)/2
    // 1/2bh (b = lado b) (h = alturaEscaleno)
    
    const s = (cateto1 + cateto2 + cateto3) / 2;
    const areaEscaleno = Math.sqrt(s * (s - cateto1) * (s - cateto2) * (s - cateto3))
    
    var h;
    const alturaEscaleno = Math.sqrt(s * (s - cateto1) * (s - cateto2) * (s - cateto3)) / ( 3 / 2 )
    
    console.log("Area: " + areaEscaleno);
    console.log("Altura: " + alturaEscaleno);
}


// Cálculo de Área

function areaNormal(cateto, base) {
    const h = alturaNormal(cateto, base);
    const area = (base * h) / 2;
    return area;
}

function areaEscaleno(cateto1, cateto2, base) {
    const s = (cateto1 + cateto2 + cateto3) / 2;
    const areaEscaleno = Math.sqrt(s * (s - cateto1) * (s - cateto2) * (s - cateto3))
    return areaEscaleno;
}



// Triggers

function calcularAltura(){
    const tipo = evaluar(lado1.valueAsNumber, lado2.valueAsNumber, base.valueAsNumber);

    if(tipo != "Escaleno"){
        let altura = alturaNormal(lado1.valueAsNumber, base.valueAsNumber)
        //console.log(altura)
    }
    else{
        let altura = alturaEscaleno(lado1.valueAsNumber, lado2.valueAsNumber, base.valueAsNumber)
        //console.log(altura)
    }
}

function calcularArea(){
    const tipo = evaluar(lado1.valueAsNumber, lado2.valueAsNumber, base.valueAsNumber);

    if(tipo != "Escaleno"){
        let area = areaNormal(lado1.valueAsNumber, base.valueAsNumber)
        console.log("El área es: " + area)
    }
    else{
        let area = areaEscaleno(lado1.valueAsNumber, lado2.valueAsNumber, base.valueAsNumber)
        console.log("El área es: " + area)
    }
}

