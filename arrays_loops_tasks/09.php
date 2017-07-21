<?php
	echo "9. Выведите столбец чисел от 1 до 100.<br><br>";

	$strResult = '';
	for ($i = 1; $i <= 100; $i++) {
		$strResult .= "{$i}<br>";
	}
	echo $strResult;
?>