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

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

// Area

function areaCirculo(radio) {
    return (radio ** 2) * Math.PI;
}

console.groupEnd();