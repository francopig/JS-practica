const lista1 = [
  100,
  200,
  300,
  500,
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length ; i++){
    sumaLista1 += lista1[i];  
}

const promedio = sumaLista1/lista1.length;

const calcularPromedio = (lista) =>{

  let acumulador = 0;
  for (let i = 0; i < lista.length ; i++){
      acumulador += lista[i];  
  } 
  //O tambien podemos usar:
  //.reduce recibe un funcion como parametro
  //y suma todos los elementos
  // const sumaLista = lista.reduce(
  //   function(valorAcumulado = 0, nuevoElemento){//0 por defecto
  //     return valorAcumulado + nuevoElemento;
  //   }
  // );

  const promedio = acumulador/lista.length;
  return promedio;
}
console.log(calcularPromedio([1,4,5,6,7,1]));
