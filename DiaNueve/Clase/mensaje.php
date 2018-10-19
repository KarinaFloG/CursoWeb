<?php
	//comentario de un linea
	#comentario de una linea

	/*
		Comentario de varias lineas
	*/ 

	$destino="karinaf141@gmail.com";
	$nombre=$_POST["nombre"];
	$correo=$_POST["correo"];
	$mensaje=$_POST["mensaje"];
	$contenido="Nombre:  ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje; //EN contenido llamamos al nombre que contiene el post del nombre del form
	mail($destino,"COrreo desde php",$contenido);
	header("Location: index.html"); //Una vez tiraod el correo recarga la pagina
?>