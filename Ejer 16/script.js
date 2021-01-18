
(function(){
	var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
	var mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]; 
		
	var pSegundo = document.getElementById("segundos");
	var pMinuto = document.getElementById("minutos");
	var pHora = document.getElementById("horas");
	var pAmpm = document.getElementById("ampm");
	var pDiaSemana = document.getElementById("diaSemana");
	var pDia = document.getElementById("dia");
	var pMes = document.getElementById("mes");
	var pAnio = document.getElementById("anio");


	var actualizarNumero = function(valor, etiqueta){
		if(valor < 10)
			valor = "0" + valor;
		
		etiqueta.textContent = valor;
		
	}

	var actualizaAmpm = function(hora){
		if(hora >= 12){
			hora = hora - 12;
			if(hora < 10)
				hora = "0" + hora;
			pAmpm.textContent = "PM";
		}
		else
			pAmpm.textContent = "AM";
		
		pHora.textContent = hora;
	}
	
	var actualizaDia = function(dia){
		pDia.textContent = dia;
	}
	
	var actualizaDiaSemana = function(dia){
		pDiaSemana.textContent = semana[dia];
	}
	
	var actualizaMes = function(month){
		pMes.textContent = mes[month];
	}
	var actualizaAnio = function(anio){
		pAnio.textContent = anio;
	}
	
	var actualiza = function(){
		var fecha = new Date();
		actualizarNumero(fecha.getSeconds(), pSegundo);
		actualizarNumero(fecha.getMinutes(), pMinuto);
		actualizaAmpm(fecha.getHours());
		actualizaMes(fecha.getMonth());
		actualizaDiaSemana(fecha.getDay());
		actualizaDia(fecha.getDate());
		actualizaAnio(fecha.getFullYear());
	}
	
	actualiza();
	setInterval(actualiza, 1000);
	
}())