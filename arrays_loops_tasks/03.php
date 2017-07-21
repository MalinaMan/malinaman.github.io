<?php
	echo "3. Дан массив с элементами 26, 17, 136, 12, 79, 15. С помощью цикла foreach найдите сумму квадратов элементов этого массива. Результат запишите переменную \$result.<br><br>";

	$elements = [26, 17, 136, 12, 79, 15];
	$result = 0;

	foreach ($elements as $value) {
		$result += $value ** 2;
	}

	echo implode('<sup>2</sup> + ', $elements) . "<sup>2</sup> = {$result}";
?>