// Código del cuadrado

console.group("Cuadrado")


function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado ** 2;
};

console.groupEnd()


// Código del triángulo

console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd()


// Código círculo

console.group("Círculo")


// Diametro

function diametroCirculo(radio) {
    return radio * 2;
}

// Circunferencia

function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

// Area

function areaCirculo(radio) {
    return (radio ** 2) * Math.PI;
}

console.groupEnd();


// Trigger HTML

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const perimetro = perimetroCuadrado(input.value);
    alert("El perímetro es de " + perimetro + "cm")
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const area = areaCuadrado(input.value);
    alert("El área es de " + area + "cm")
}


// Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const perimetro = perimetroCuadrado(input1.value, input2.value, input3.value);
    alert("El perímetro es de " + perimetro + "cm")
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputBase");
    const input2 = document.getElementById("InputAltura");
    const area = areaTriangulo(input1.value, input2.value);
    alert("El área es de " + area + "cm")
}

// Círculo

function calcularCircunferenciaCirculo() {
    const input = document.getElementById("InputCirculo");
    const circunferencia = circunferenciaCirculo(input.value)
    alert("El perímetro es de " + circunferencia + "cm")
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const area = areaCirculo(input.value);
    alert("El área es de " + area + "cm")
}