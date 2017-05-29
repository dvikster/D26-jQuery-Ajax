<?php
// Метод POST, переменные name и pass
// если они равны alex и  5577 - скрипт разрешит доступ, в противном случае - ошибка
// данные берем из input
	$name = $_POST['name'];
	$pass = $_POST['pass'];
	if ($name =='alex' AND $pass=='5577') {
		echo 'Доступ разрешен';
	}
	else {
		echo 'Ошибка';
	}
?>