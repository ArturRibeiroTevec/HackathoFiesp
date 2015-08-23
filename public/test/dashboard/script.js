


function okCasa(id) {

	document.getElementById(id+"-okButton").style.opacity = 1;
	document.getElementById(id+"-noButton").style.opacity = 0.3;
}

function noCasa(id) {

	document.getElementById(id+"-okButton").style.opacity = 0.3;
	document.getElementById(id+"-noButton").style.opacity = 1;
}

function showDetails(id) {
	// Ex: casaX-back, casaX-front
	// document.getElementById(id+"-front").style.marginTop = "500px";
	document.getElementById(id+"-front").style.display = "none";
	document.getElementById(id+"-back").style.display = "block";
}

function hideDetails(id) {

	// Ex: casaX-back, casaX-front
	document.getElementById(id+"-front").style.display = "block";
	document.getElementById(id+"-back").style.display = "none";

}





