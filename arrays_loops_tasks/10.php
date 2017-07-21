<?php
	echo "10. Выведите столбец чисел от 11 до 33.<br><br>";

	$strResult = '';
	for ($i = 11; $i < 34; $i++) {
		$strResult .= "{$i}<br>";
	}
	echo $strResult;
?>