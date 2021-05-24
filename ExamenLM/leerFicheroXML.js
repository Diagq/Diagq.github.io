function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let impares = xmlDoc.querySelectorAll("impar")
	let pares = xmlDoc.querySelectorAll("par")
	for(let i=0; i<impares.length&&pares.length; i++){
		MouseEvent=('Over') capaVacia.innerHTML = capaVacia.innerHTML + "<p class ='impar'>" + impares[i].textContent + "</p>"
		MouseEvent=('Over') capaVacia.innerHTML = capaVacia.innerHTML + "<p class ='par'>" + pares[i].textContent + "</p>"
	}
}

	loadDocA("animales.xml","xml");
    
