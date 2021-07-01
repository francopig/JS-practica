//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El valor del perimetro es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El valor del área es: ${areaCuadrado} cm cuadrados`);

console.groupEnd();

//Código del Triángulo
console.group("Triangulos");
const ladoTriangulo1     = 6,
      ladoTriangulo2     = 6,
      baseTriangulo3     = 4,
      alturaTriangulo    = 5.5,
      perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3,
      areaTriangulo      = (baseTriangulo3 * alturaTriangulo)/2;

console.log(`Los lados del triángulo miden ${ladoTriangulo1},${ladoTriangulo2} y ${baseTriangulo3}`);
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}`);
console.log(`El área del triangulo es: ${areaTriangulo}`);

console.groupEnd();
//Código del Circulo
console.group("Circulos");

//radio
const radioCirculo     = 4,
      diametroCirculo  = radioCirculo * 2,
      PI               = Math.PI,
      perimetroCirculo = diametroCirculo * PI,
      areaCirculo      = (radioCirculo * radioCirculo) * PI;

console.log(`Radio: ${radioCirculo} | diametro:${diametroCirculo} | PI: ${PI}`);
console.log(`Perimetro: ${perimetroCirculo} | area: ${areaCirculo}`);
console.groupEnd();

