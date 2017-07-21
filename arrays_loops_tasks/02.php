<?php
	echo "2. Дан массив с элементами 1, 20, 15, 17, 24, 35. С помощью цикла foreach найдите сумму элементов этого массива. Запишите ее в переменную \$result.<br><br>";

	$elements = [1, 20, 15, 17, 24, 35];
	$result = 0;

	foreach ($elements as $value) {
		$result += $value;
	}

	echo implode(' + ', $elements) . " = {$result}";
?>