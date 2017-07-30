<?php
	function checkEntryInArray($arr, $searchValue) {
		foreach ($arr as $value) {
			if (in_array($value, $searchValue, true)) {
				return true;
			}
		}
		return false;
	}

	echo "14. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. С помощью цикла foreach и оператора if
проверьте есть ли в массиве элемент со значением \$e, равном 2, 3 или 4. Если есть —
выведите на экран 'Есть!', иначе выведите 'Нет!'.<br><br>";

	$arr = [4, 2, 5, 19, 13, 0, 10];
	$e = [2, 3, 4];

	if (checkEntryInArray($arr, $e)) {
		echo "Есть!";
	} else {
		echo "Нет!";
	}

?>