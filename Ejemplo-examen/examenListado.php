<?php
	//Adaptada a Español
	header('Content-Type: text/html;charset=utf-8');

	$almacen = array(
		array(
			'id'		=> '0',
			'producto'	=> 'camisa',
			'talla'		=> '36',
			'precio'	=> '45',
			'almacen'	=> '3'
		),
		array(
			'id'		=> '1',
			'producto'	=> 'camisa',
			'talla'		=> '38',
			'precio'	=> '45',
			'almacen'	=> '3'
		),
		array(
			'id'		=> '2',
			'producto'	=> 'camisa',
			'talla'		=> '40',
			'precio'	=> '45',
			'almacen'	=> '3'
		),
		array(
			'id'		=> '3',
			'producto'	=> 'pantalón',
			'talla'		=> '40',
			'precio'	=> '32.50',
			'almacen'	=> '6'
		),
		array(
			'id'		=> '4',
			'producto'	=> 'pantalón',
			'talla'		=> '42',
			'precio'	=> '32.50',
			'almacen'	=> '8'
		),
		array(
			'id'		=> '5',
			'producto'	=> 'falda',
			'talla'		=> '36',
			'precio'	=> '52',
			'almacen'	=> '3'
		),
		array(
			'id'		=> '6',
			'producto'	=> 'falda',
			'talla'		=> '42',
			'precio'	=> '52',
			'almacen'	=> '1'
		),
		array(
			'id'		=> '7',
			'producto'	=> 'Bufanda',
			'talla'		=> '',
			'precio'	=> '29.99',
			'almacen'	=> '12'
		),
		array(
			'id'		=> '8',
			'producto'	=> 'Pareo',
			'talla'		=> '',
			'precio'	=> '31',
			'almacen'	=> '9'
		),
	);	

	$json = json_encode($almacen);
	exit($json);
?>
