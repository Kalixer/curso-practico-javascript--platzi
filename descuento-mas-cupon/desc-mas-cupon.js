const descuentoDefault = 15;




// Esto es solo para escribir el resultado
const precio = document.getElementById("precioAnterior");
const precioFinal = document.getElementById("precioConDescuento");

descuento.innerText = descuentoDefault + "%OFF";


function calcularDescuento(precio, desc) {
    const porcentajePrecioConDescuento = 100 - desc;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function accionDeBoton(){
    const des = document.getElementById("descuento");
    const descuentoAdicional = parseInt(des.value);
    
    const descuento = document.getElementById("default");
    
    const cup = document.getElementById("cupones")
    const cupon = parseInt(cup.value)
    
    const po = document.getElementById("precioOriginal");
    const precioOriginal = parseInt(po.value) 
    

    console.log("Click");

    const descuentoTotal = (descuentoDefault + descuentoAdicional + cupon);
    descuento.innerText = descuentoTotal + "%OFF";
    
    precio.innerHTML = "<strike>" + precioOriginal + "</strike>";
    
    precioFinal.innerText = calcularDescuento(precioOriginal, descuentoTotal)
    
}