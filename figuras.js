// Calcular el lado de un cuadrado
console.group("Cuadrados");

// Calcular el perimetro de un cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
};

// Calcular el área de un cuadrado
function areaCuadrado(lado) {
    return lado * lado;
};
console.groupEnd();


// Calcular los lados del triángulo
console.group("Triangulos");

// Calcular perímetro y área del triangulo
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
};
console.groupEnd();


// Cálculos del circulo
console.group("Circulos");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
};

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

// Área
function areaCirculo (radio) {
    return (radio * radio) * PI;
};
console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo () {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}
