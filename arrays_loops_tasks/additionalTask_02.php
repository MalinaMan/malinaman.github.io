<?php
	echo "B2. Дано случайное число. Определить простое ли оно.<br><br>";

	$randomNumber = rand(2, 200);	// простые числа начинаются с 2
	$success = true;	// по умолчанию считаем, что число простое

	for ($i = 2; $i < $randomNumber; $i++) {	// поиск в диапазоне от 2 до randomNumber-1
		if ($randomNumber % $i === 0) {
			$success = false;
			break;
		}
	}

	echo "Исходное число: {$randomNumber}<br>";
	echo "Это число простое: " . ($success ? 'ДА' : 'НЕТ');
?>
