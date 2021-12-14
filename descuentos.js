/* Formula para los decuentos
        [P * (100 - D)] / 100
*/


function calcularDescuento(precio, desc) {
        const porcentajePrecioConDescuento = 100 - desc;
        const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
        return precioConDescuento;
}

function onclickButtonPriceDiscount() {
        var precioOriginal = document.getElementById("InputPrice");
        var price = parseInt(precioOriginal.value);
        
        var descuento = document.getElementById("InputDiscount")
        var discount = parseInt(descuento.value);

        var resultP = document.getElementById("ResultP");
        
        let precioConDescuento = calcularDescuento(price, discount)
        resultP.innerText += "El precio con descuento es de $" + precioConDescuento;
}



/*console.log({
        precioOriginal,
        descuento,
        porcentajePrecioConDescuento,
        precioConDescuento
})
*/