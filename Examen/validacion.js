function validar() {
	var cui, contrasenia;
	cui = document.getElementById("cui").value;
	contrasenia = document.getElementById("contrasenia").value;

	if(!(cui.length === 8)) {
		alert("Formato de Cui incorrecto");
		return false;
	}

	if(contrasenia === ""){
		alert("La contraseña no puede estar vacía");
		return false;
	}
}