<?php
	echo "26. Вам нужно создать массив и заполнить его случайными числами от -99 до 99 (rand). Далее, вычислить произведение тех элементов, которые больше нуля и у которых парные индексы. После вывести на экран элементы, которые больше нуля и у которых не парный индекс.<br><br>";

	for ($i = 0; $i < 10; $i++) {
		$arr[] = rand(-99, 99);
	}

	$multipleEven = function($arr) {
		$multiple = 1;
		foreach ($arr as $key => $value) {
			if ($value > 0 && $key % 2 === 0) {
				$multiple *= $value;
			}
		}
		return $multiple;
	};

	$strOdd = function($arr) {
		$str = '';
		foreach ($arr as $key => $value) {
			if ($value > 0 && $key % 2 !== 0) {
				$str .= $value . ', ';
			}
		}
		return $str;
	};

	echo "Исходный массив: " . implode(", ", $arr);
	echo "<br>Произведение элементов, которые больше 0 и у которых парные индексы: " . $multipleEven($arr) . "<br>";
	echo "Массив элементов, которые больше 0 и у которых непарные индексы: " . trim($strOdd($arr), ', ');
?>