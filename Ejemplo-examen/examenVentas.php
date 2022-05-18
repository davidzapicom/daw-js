<?php
	//Adaptada a Español
	header('Content-Type: text/html;charset=utf-8');

	$id = $_POST["id"];
	$cantidad = $_POST["cantidad"];

	echo "Vendidas ". $cantidad. " del articulo ". $id;
?>
