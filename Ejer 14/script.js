
(function(){
	//Tenemos dos sentencias para ejecutar opciones pasado un tiempo (tiempo en milisegundos)
		//setInterval - Ejecuta una funcion cada cierto tiempo
		//setTimeout - Ejecuta una funcion una vez despues de cierto tiempo
		
	var contador = 1;
	var saludo = function(){
		if(contador<=5)
			document.write(contador++ + "<br/>");
	}
	
	setInterval(saludo, 1000);
	
	setTimeout(function(){
		document.write("Funcion con timeout<br/>");
	}, 3000);
}())