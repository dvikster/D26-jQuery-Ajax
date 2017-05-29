<?php
//создайте input куда пользователь может ввести число
// c помощью AJAX передайте число методом GET в этот скрипт
// в переменную num. 
// выведите ответ сервера
if (isset($_GET['num']) AND $_GET['num']!='') {
	$a = $_GET['num'];
	if ($a%2 == 0) {
		echo 'even';
	}
	else {
		echo 'odd';
	}
}
else {
	echo 'error!';
}
?>
