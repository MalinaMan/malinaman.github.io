<?php
	echo "25. Ваше задание создать массив, наполнить это случайными значениями (функция rand),
найти максимальное и минимальное значение и поменять их местами.<br><br>";

	for ($i = 0; $i < 15; $i++) {
		$arr[] = rand(0, 100);
	}

	$min = 999;
	$max = -1;
	$posMin = $posMax = -1;
	
	foreach ($arr as $key => $value) {

		if ($value < $min) {
			$min = $value;
			$posMin = $key;
		};
		if ($value > $max) {
			$max = $value;
			$posMax = $key;
		}

	}

	echo "Исходный массив: " . implode(", ", $arr);

	echo "<br>Минимальное значение: {$min}<br>";
	echo "Максимальное значение: {$max}<br><br>";

	$arr[$posMin] = $max;
	$arr[$posMax] = $min;

	echo "Массив после изменения: " . implode(", ", $arr);
?>