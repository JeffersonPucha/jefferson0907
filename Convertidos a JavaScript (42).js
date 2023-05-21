function sin_titulo() {
	var num = new Number();
	var resultado = new Number();
	document.write("Digite un numero: ",'<BR/>');
	num = Number(prompt());
	resultado = Math.floor(Math.random()*num);
	document.write("El resultado es: ",resultado,'<BR/>');
}

