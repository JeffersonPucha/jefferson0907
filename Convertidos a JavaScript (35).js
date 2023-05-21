function sin_titulo() {
	var numero = new Number();
	var factorial = new Number();
	var contador = new Number();
	document.write("Ingrese un numero:",'<BR/>');
	numero = Number(prompt());
	if (numero<0) {
		document.write("Error: el numero debe ser mayor o igual a cero.",'<BR/>');
	}
	factorial = 1;
	contador = 1;
	while (contador<=numero) {
		factorial = factorial*contador;
		contador = contador+1;
	}
	document.write("El factorial de ",numero," es ",factorial,'<BR/>');
}

