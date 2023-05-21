// Ejercicio 5: Una tienda ofrece un descuento del 15%  sobre el total de la
// compra y un cliente desea saber cuanto debera pagar finalmente por su compra
function ejercicio5() {
	var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Digite el precio a pagar: ",'<BR/>');
	precio = Number(prompt());
	descuento = precio*0.15;
	precio_final = precio-descuento;
	document.write("El precio a pagar es de: ",precio_final,'<BR/>');
}

