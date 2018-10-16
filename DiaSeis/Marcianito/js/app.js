var pregunta = prompt("Hazle una pregunta al marcianito"); //Para tomar en cuenta la pregunta del usuario
var respuesta = Math.random(); //Para determinar la respuesta de la compu

if (respuesta < 0.25) {
	alert("Si");
} else if (respuesta <= 0.50) {
	alert("No");
} else if (respuesta <= 0.75 ) {
	alert("Suena bobo, pero podría ser");
} else {
	alert("JAJAJAJA QUÉ INGENUO");
}

