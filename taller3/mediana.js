
const lista1 = [
    100,
    200,
    500,
    400000000,
];

let mitadLista1 = parseInt(lista1.length / 2);
let mediana;

const esPar = (n) => {
  if(n % 2 === 0){
    return true;
  }else{
    return false;
  }
}

const calcularPromedio = (lista) =>{

  let acumulador = 0;
  for (let i = 0; i < lista.length ; i++){
      acumulador += lista[i];  
  } 

  const promedio = acumulador/lista.length;
  return promedio;
}

if (esPar(lista1.length)){
  const elemento1 = lista1[mitadLista1];
  const elemento2 = lista1[mitadLista1 - 1];
  const promedioElemento1y2 = calcularPromedio([elemento1,elemento2]);
  mediana = promedioElemento1y2;

}else{
   mediana = lista1[mitadLista1];
}

const calcularMediana = (arr) => {
  
  let mitad = parseInt(arr.length / 2);
  let mediana;
  
  arr.sort((a, b) => a - b); //ordeno el arr

  if ((arr.length % 2) === 0){//pregunto si es par
    const elemento1 = arr[mitad];
    const elemento2 = arr[mitad - 1];
    const promedioElemento1y2 = calcularPromedio([elemento1,elemento2]);
    mediana = promedioElemento1y2;
  
  }else{
     mediana = arrr[mitad];
  }
  return mediana;
} 




//probando funcion para ordenar arr
let arreglo = [1,5,4,6,12,7];

//ordenar el arreglo
arreglo.sort((a, b) => a - b);
console.log(arreglo);
