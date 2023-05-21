function sin_titulo() {
	var contador, maximo, media, minimo, num, suma;
	document.write("ingrese numeros",'<BR/>');
	num = Number(prompt());
	minimo = num;
	maximo = num;
	suma = 0;
	while ((num!=0)) {
		if ((num>maximo)) {
			maximo = num;
		}
		if ((num<minimo)) {
			minimo = num;
		}
		suma = suma+num;
		contador = contador+1;
		num = Number(prompt());
	}
	media = suma/(contador);
	document.write("El maximo es ",maximo,'<BR/>');
	document.write("El minimo es ",minimo,'<BR/>');
	document.write("La media es ",media,'<BR/>');
}

