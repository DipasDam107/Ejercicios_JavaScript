var padre = document.getElementById("contenedor");
var elemento = document.createElement("div");
var referencia = document.getElementsByTagName("div")[1];
padre.insertBefore(elemento, referencia);

//Para modificar atributos como clase, id, tamaño... podemos tocarlo con setAttribute
elemento.setAttribute("class", "azul");

//Puedo añadir multiples valores, util por ejemplo para las clases
var elementoMultiple = document.getElementsByTagName("div")[0];
elementoMultiple.setAttribute("class", "bordeGrueso rojo");

//Se puede acceder directamente a los atributos

document.write("Clase: " + elemento.className);
elemento.id = "tercerID";
elemento.className = "azul bordeGrueso";

document.write("<br/>Clase: " + elemento.className);

//De la misma manera que en otros lenguajes no es necesario usar variables para operar
document.getElementById("enlace").className = "titularSecundario";
document.getElementById("enlace").href = "https://www.google.com";
			
//Podemos setear estilos desde js, incluso quitar clases usando funciones de cadenas
var titular = document.createElement("h1");
titular.innerHTML = "Titulo 1";
document.body.appendChild(titular);			
titular.style.background = "navy";
titular.style.color = "white";
titular.style.marginTop = "40px";
titular.className = "titulo tituloGrande";
titular.className = titular.className.replace("tituloGrande", "");