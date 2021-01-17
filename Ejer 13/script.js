
(function(){
	/*
	//Obtengo todos los formularios
	var formularios = document.forms;
	
	//Obtengo un formulario especifico
	var formulario = formularios[0];
	
	//Puedo acceder al formulario a través del name
	var formu = document.formulario;
	
	//Obtengo los elementos del formulario
	var elementos = formu.elements;
	
	//Obtengo un input concreto y comprobar el tipo
	var mujer = elementos.mujerRadio;
	document.write(mujer.type);
	
	//Para obtener el valor de un campo
	documents.formulario.nombre.value;
	
	//Para dar foco 
	documents.formulario.nombre.focus();
	*/
	
	var formulario = document.getElementsByName('formulario')[0],
		elementos = formulario.elements,
		boton = document.getElementById('btn');
	
	var validarNombre = function(){
		var correcto = true;
		if(formulario.nombre.value==""){
			correcto = false;
			alert("Nombre vacío");
		}
		return correcto;
		
	};
	
	var validarRadios = function(){
		var correcto = true;
		if(!formulario.sexo[0].checked && !formulario.sexo[1].checked){
			correcto = false;
			alert("Selecciona Sexo");
		}
		return correcto;
	};
	
	var validarTermino = function(){
		var correcto = true;
		if(!formulario.terminos.checked){
			correcto = false;
			alert("Acepta los terminos");
		}
		return correcto;
		
	}
	var validar = function(e){
		// El boton submit envía la información. Si los campos no son correctos prevenimos de que lo haga
		if(!validarNombre() | !validarRadios() | !validarTermino())
			e.preventDefault();
		else{
			alert("Validacion correcta");
		}
		
	};
	
	
	
	formulario.addEventListener("submit", validar);
}())