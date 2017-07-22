<?php
	echo "B1. Составить список случайной длины (20 до 40) из случайных чисел в диапазоне от -100 до 100. Подсчитать количество четных, нечетных, положительных и отрицательных значений. Составить ассоциативный массив их этих значений.<br><br>";

	$maxLength = rand(20, 40);
	for ($i = 0; $i <= $maxLength; $i++) {
		$arr[] = rand(-100, 100);
	}

	$quantityEven = $quantityOdd = 0;
	$quantityPositive = $quantityNegative = 0;

	foreach ($arr as $value) {
		
		if ($value % 2) {
			$quantityOdd++;
		} else {
			$quantityEven++;
		}

		if ($value < 0) {
			$quantityNegative++;
		} elseif ($value > 0) {
			$quantityPositive++;
		}
	}

	$arrProcessing = ['Кол-во четных чисел:' => $quantityEven,
					  'Кол-во нечетных чисел:' => $quantityOdd,
					  'Кол-во положительных чисел:' => $quantityPositive,
					  'Кол-во отрицательных чисел:' => $quantityNegative];
	echo "Исходный массив: " . implode(', ', $arr);
	echo "<br>Массив-результат: ";
	print_r($arrProcessing);
?>