const calcularPrecioConDescuento = (precio, descuento) => (precio-((precio*descuento)/100));
console.log(calcularPrecioConDescuento(500,10));//450

//agregamos la opcion de descuento por cupones:
// const coupons = [
//   {
//     name: "cupon1",
//     discount: 15,
//   },
//   {
//     name: "cupon2",
//     discount: 20,
//   },
//   {
//     name: "cupon3",
//     discount: 30,
//   },
// ];


function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
        
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

}

//Funciones propias para sumar/restar porcentajes optimizada

//ej: aumentar 15% es lo mismo a multiplicar *1.15
//restar 15% = multiplicar por 0.85
const calcularAumento = (precio,aumento) => (precio* ((100+aumento)/100));
const calcularDescuento = (precio,descuento) => (precio* (( 100-descuento)/100));

console.log(calcularAumento(100,15));
console.log(calcularDescuento(100,15));



