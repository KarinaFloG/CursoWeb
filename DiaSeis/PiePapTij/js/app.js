var usuarioElige = prompt("¿Qué quieres ser? Piedra, papel o tijera");
var computadoraElige =  Math.random(); /*la función toma valores entre cero y uno*/

if (computadoraElige < 0.34) {
	computadoraElige = "piedra";
} else if (computadoraElige <= 0.67) {
	computadoraElige = "tijera";
} else {
	computadoraElige = "papel";
}


var comparar = function(eleccion1, eleccion2) {
	if (eleccion1 === eleccion2) {
		return "Empataron chavo";
	} else if (eleccion1 === "piedra") {
		if (eleccion2 === "papel") {
			alert("Fuiste cubierto por el papel del mal");
		} else {
			alert("Le partista su mandarina a las tijeras");
		}
	} else if (eleccion1 === "papel") {
		if (eleccion2 === "piedra") {
			alert("Le ganaste a la piedra");
		} else {
			alert("Le partiste su mandarina a las tijeras");
		}
	} else if (eleccion1 === "tijera") {
		if(eleccion2 === "papel"){
			alert("Le ganaste al paper");
		} else {
			alert("Te ganó la piedra compi");
		}
	} else {
		alert("Esa cosa que metiste no es válida");
	}
}

console.log(comparar(computadoraElige,usuarioElige));