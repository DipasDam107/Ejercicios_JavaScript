
(function(){
	
		var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		var mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]; 
		
		//Obtengo la fecha actual al no pasar parámetros
		var fecha = new Date();
		document.write(fecha);
		
		//Obtener horas
		document.write("<br/>Hora: " + fecha.getHours());
		
		//Obtener minutos
		document.write("<br/>Minutos: " + fecha.getMinutes());
		
		//Obtener segundos
		document.write("<br/>Segundos: " + fecha.getSeconds());
		
		//Obtener dia
		document.write("<br/>Dia Semana: " + semana[fecha.getDay()]);
		
		//Obtener dia
		document.write("<br/>Dia: " + fecha.getDate());
		
		//Obtener mes
		document.write("<br/>Mes: " + mes[fecha.getMonth()]);
		
		//Obtener año
		document.write("<br/>Año: " + fecha.getFullYear());
		
		
}())