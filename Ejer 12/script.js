
(function(){
	var boton = document.getElementById("boton");
	
	//Añadimos al boton una funcion anonima
	boton.addEventListener("click", function(){
		alert("Hola");
	});
	
	var boton2 = document.getElementById("boton2");
	var funcion = function(){
		alert("Saludo");
		
	};
	
	boton2.addEventListener("click", funcion);
	
	//Hay muchos eventos distintos. https://www.w3schools.com/jsref/dom_obj_event.asp
	
	//En este caso cambio el color de fondo segun tiene o no foco el input
	var ganaFoco = function(e){
		var caller = e.srcElement;
		caller.setAttribute("class", "siFoco");

	};
	
	var pierdeFoco = function(e){		
		var caller = e.srcElement;
		caller.setAttribute("class", "noFoco");
	};
	
	//el evento de tipo change se ejecuta cuando hay un cambio en el texto
	var cambioValor = function(e){		
		var caller = e.srcElement;
		alert("Valor del nuevo texto: " + caller.value + "\nEste evento es de tipo: " + e.type + "\nElemento donde se esta aplicando: " + e.target);
	};
	
	document.querySelectorAll('.input').forEach(item => {
		item.addEventListener('focus', ganaFoco);
		item.addEventListener('blur', pierdeFoco);
		item.addEventListener('change', cambioValor);
	})
	
	// Para quitar un evento se usa removeEventListener
	var input2 = document.getElementById("input2");
    input2.removeEventListener('change', cambioValor);
	
	//Podemos cancelar la accion por defecto del evento para ese elemento con preventDefault
	var enlace = document.getElementById("enlace");
	var cancelar = function(e){
		alert("He cancelado el enlace");
		e.preventDefault();
	};
	
	enlace.addEventListener("click", cancelar);
	
	
}())