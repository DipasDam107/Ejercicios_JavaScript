var zoom = function(){
	var imagen = document.getElementById("imagen");
	if(imagen.className == "thumb")
		imagen.className="grande";
	else
		imagen.className="thumb";
}