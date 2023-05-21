// Ejercicio 4: Suponga que se tiene un conjunto de calificaciones de un grupo
// de 10 alumnos. Realizar un algoritmo para calcular la calificacion promedio y
// la calificacion mas baja de todo el grupo.
function ejercici04() {
	var calificacion_baja;
	var calificacion_promedio = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		document.write(i,". Digite una calificacion: ",'<BR/>');
		calificacion = Number(prompt());
		// Suma iterativa de las calificaciones
		suma = suma+calificacion;
		// Calculamos la menor calificacion 
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	document.write("La calificacion promedio es: ",calificacion_promedio,'<BR/>');
	document.write("La calificacion mas baja es: ",calificacion_baja,'<BR/>');
}

