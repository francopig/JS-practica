const arr = [1,2,3,1,2,3,4,2,2,2,1];

//primero hay que cntar cuantas veces aparace cada numero

const count = {}; //objeto contador

arr.map(
  function(elemento){
    if (count[elemento]){
      count[elemento] += 1;
    }else {
      count [elemento] = 1;
    } 
  }
);

//pasamos los resultados guardados en count a un arreglo

// const arrCount = Object.entries(count);

//utilizamos la funcion sort para encontrar el numero mas grande

const arrCount = Object.entries(count).sort(function (a,b){
   return a[1] - b[1]; 
  });

const moda = arrCount [arrCount.length - 1];

const calcularModa = (arr) => {
    const count = {}; //creo objeto vacio
    //cuento cuantas veces aparece cada numero
    arr.map(
      function(elemento){
        if (count[elemento]){
          count[elemento] += 1;
        }else {
          count [elemento] = 1;
        } 
      }
    );
    const arrCount = Object.entries(count).sort(function (a,b){
      return a[1] - b[1]; 
    });
  
    const moda = arrCount [arrCount.length - 1];
    return moda;
};


console.log(calcularModa([1,1,1,3,4,5,6,7,8,7,8,5,3,8,7,5,8,9,8]));