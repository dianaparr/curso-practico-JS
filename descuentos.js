// const precioOriginal = 100;
// const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    // el 100 es el 100% -> el precio original del producto
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    // para escribir dentro del HTML: .innerText -> escribir un párrafo desde JS
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
}

// aplicar cupones de descuentos
// array de objetos
const coupons = [
    {
        name: "uncuponcito",
        discount: 15
    },
    {
        name: "uncupon",
        discount: 20
    },
    {
        name: "uncuponsote",
        discount: 25
    }
];

// buscar si el cupon que se ingresa es válido
const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });
