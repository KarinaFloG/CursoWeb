/*Encuentra la primera etiqueta p dentro de la pag y la muestra*/
document.querySelector("p").innerHTML = "Busque por etiqueta";
document.querySelector("p.buscandoClase").innerHTML = "Busque por clase";
document.querySelector("buscandoId").innerHTML = "Busque por id";

/*Para declarar una variable*/
var nombre = document.getElementsByName('botoncito')[0].value;
/*Da un aviso en pantalla*/
alert(nombre);
/*Operadores aritmeticos*/
var y = 5;
var x = y + 2;

document.write('\nOperacioón suma' + x);
var z = 5;
var a = --z;
document.write('\nDecremento:' + a);
/*Modulo*/
var b = 5;
var c = b % 2;
document.write("\NModulo" + c);

var d = 5;
var e = 10;
d = e;

var texto = "HOLA", texto1 = "Mundo";
var valor = 5, valor1 = 6, valor2 = 7, valor3 = 8;
var val = true, val1 = true;

//NUmero mas un numero -> suma
valor += 2;
//Bolen +numero -> suma
val += 1;
//NUmero mas una cadena -> comcatenacion
valor2 += texto;
//Cadena mas booleano -> concatenacion
texto1 += false;
//infinito
valor3 /=0;
//Para imprimir
document.write("Prueba 1: " + valor + "Prueba2: " + val + "Prueba3" + valor2 +"Texto: " + texto1 + "Valor3: " + valor3);


//Tipos de varibles
var varibale1;
typeof varibale1;