<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$gender = $_POST['gender'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$number = $_POST['number'];

	$host = '185.27.134.10';
	$username = 'if0_35138299_user';
	$password = '';
	$database = 'user';
	
	$connection = mysqli_connect($host, $username, $password, $database);
	
	if (!$connection) {
		die('4LB - Checking you infooo.....: ' . mysqli_connect_error());
	}
	?>
	