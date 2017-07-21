<?php
	echo "11. Выведите столбец четных чисел в промежутке от нуля до 100.<br><br>";

	$strResult = '';
	for ($i = 0; $i <= 100; $i++) {
		if ($i%2 == 0) {
			$strResult .= "{$i}<br>";
		}
	}
	echo $strResult;
?>