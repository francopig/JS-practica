//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado (lado){//recibe parámetros
  return  lado * 4;
} 
perimetroCuadrado(54);//enviamos argumentos

// console.log(`El valor del perimetro es: ${perimetroCuadrado} cm`);

const areaCuadrado = (lado) => lado*lado;
// console.log(`El valor del área es: ${areaCuadrado} cm cuadrados`);

console.groupEnd();

//Código del Triángulo
console.group("Triangulos");
// const ladoTriangulo1     = 6,
//       ladoTriangulo2     = 6,
//       baseTriangulo3     = 4,
//       alturaTriangulo    = 5.5,
//       perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3,
//       areaTriangulo      = (baseTriangulo3 * alturaTriangulo)/2;

const perimetroTriangulo = (lado1,lado2,base) => lado1+lado2+base;
const areaTriangulo = (base, altura) => (base*altura)/2;

// console.log(`Los lados del triángulo miden ${ladoTriangulo1},${ladoTriangulo2} y ${baseTriangulo3}`);
// console.log(`El perimetro del triangulo es: ${perimetroTriangulo}`);
// console.log(`El área del triangulo es: ${areaTriangulo}`);

console.groupEnd();
//Código del Circulo
console.group("Circulos");

//radio
// const radioCirculo     = 4,
//       diametroCirculo  = radioCirculo * 2,
//       PI               = Math.PI,
//       perimetroCirculo = diametroCirculo * PI,
//       areaCirculo      = (radioCirculo * radioCirculo) * PI;


function diametroCirculo(radio){
    return radio*2;
}
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}

function circunferencia(diametro){
    return diametro * Math.PI;
}
//ahora como arrow function uwu
const circunferencia2 = (diametro) => diametro * Math.PI;
  
console.log(circunferencia(10));
console.log(circunferencia2(20));

// console.log(`Radio: ${radioCirculo} | diametro:${diametroCirculo} | PI: ${PI}`);
// console.log(`Perimetro: ${perimetroCirculo} | area: ${areaCirculo}`);
console.groupEnd();



//Aqui interactuamos con el HTML
const calcularPerimetroCuadrado = () => {

  //nos permite obtener el elemento de html
    const input = document.getElementById("InputCuadrado");
    const value = input.value;//obtemos el valor ingresado
    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro es: ${perimetro}`);
}

const calcularAreaCuadrado = () => {

  //nos permite obtener el elemento de html
    const input = document.getElementById("InputCuadrado");
    const value = input.value;//obtemos el valor ingresado
    const area = areaCuadrado(value);
    alert(`El area es: ${area}`);
}


const calcularPerimetroTriangulo = () => {
  //tengo que utilizar el number porque por alguna razon los numeros vienen como string
    const lado1     = Number(document.getElementById("InputTrianguloLado1").value),
          lado2     = Number(document.getElementById("InputTrianguloLado2").value),
          base      = Number(document.getElementById("InputTrianguloBase").value),
          perimetro = perimetroTriangulo(lado1,lado2,base);
    
    alert(`El perimetro es: ${perimetro}`);
}

const calcularAreaTriangulo = () => {
    const base      = Number(document.getElementById("InputTrianguloBase").value),
          altura    = Number(document.getElementById("InputTrianguloAltura").value),
          area      = areaTriangulo(base,altura);

    alert(`El area es: ${area}`);
}

const calcularCircunferenciaCirculo = () =>{
    const radio          = Number(document.getElementById("InputCirculo").value),
          circunferencia = (radio*2)*Math.PI;
    
    alert(`La circunferencia/perimetro del circulo es: ${circunferencia}`);
}

const calcularAreaCirculo = () =>{
    const radio = Number(document.getElementById("InputCirculo").value),
          area  = (radio*radio)*Math.PI;

    alert(`El área es: ${area}`);
}



////////////////////////
//programa que calcula altura de un triangulo Isosceles
function alturaIso (base,lado){
    
    const baseReal = base/2;
    //pitagoras despejado
    const altura = Math.sqrt((lado*lado)-(baseReal*baseReal));
    console.log(altura);
}

alturaIso(4,10);
