function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let dcha = xmlDoc.querySelectorAll("derecha")
	let izqda = xmlDoc.querySelectorAll("izquierda")
	for(let i=0; i<izqda.length&&dcha.length; i++){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='izqda'>" + izqda[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='dcha'>" + dcha[i].textContent + "</p>"
	}
}
loadDocA("conversacion.xml","xml");
