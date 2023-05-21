function sin_titulo() {
	var contador, num, suma;
	document.write("ingrese",'<BR/>');
	num = Number(prompt());
	suma = 0;
	contador = 1;
	while ((num!=-1)) {
		suma = suma+num;
		contador = contador+1;
		num = Number(prompt());
	}
	document.write(suma/(contador-1),'<BR/>');
}

