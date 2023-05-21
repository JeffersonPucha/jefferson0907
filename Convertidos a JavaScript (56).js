// Ejercicio 2: Determinar si un alumno aprueba o reprueba un curso, sabiendo que
// aprobara si su promedio de tres calificaciones es mayor o igual a 70
// reprueba caso contrario. (Diagrama de Flujo)
function ejercicio2() {
	var nota1 = new Number();
	var nota2 = new Number();
	var nota3 = new Number();
	var promedio = new Number();
	document.write("Digite las 3 calificaciones: ",'<BR/>');
	nota1 = Number(prompt());
	nota2 = Number(prompt());
	nota3 = Number(prompt());
	promedio = (nota1+nota2+nota3)/3;
	if (promedio>=70) {
		document.write("El alumno esta aprobado con: ",promedio,'<BR/>');
	} else {
		document.write("El alumni esta desaprobado con: ",promedio,'<BR/>');
	}
}

