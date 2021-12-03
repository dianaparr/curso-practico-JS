// Calcular el lado de un cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

// Calcular el perimetro de un cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

// Calcular el área de un cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();


// Calcular los lados del triángulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    `Los lados del triángulo miden: ${ladoTriangulo1} cm,
    ${ladoTriangulo2} cm y ${baseTriangulo} cm`
);

console.log(
    `La altura del triangulo es de: ${alturaTriangulo} cm`
);

// Calcular perímetro y área del triangulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo} cm^2`);
console.groupEnd();


// Cálculos del circulo
console.group("Circulos");

// Radio
const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo} cm`);

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo} cm`);

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es: ${perimetroCirculo} cm`);

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del circulo es: ${areaCirculo} cm^2`);
console.groupEnd();
