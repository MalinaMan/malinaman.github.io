<?php
	function sumExponentElements($arr, $exponent) {
		$result = 0;
		foreach ($arr as $value) {
			$result += $value ** $exponent;
		}
		return $result;
	}
	
	echo "3. Дан массив с элементами 26, 17, 136, 12, 79, 15. С помощью цикла foreach найдите сумму квадратов элементов этого массива. Результат запишите переменную \$result.<br><br>";

	$elements = [26, 17, 136, 12, 79, 15];
	$exponent = 2;
	echo implode('<sup>' . $exponent . '</sup> + ', $elements) . "<sup>" . $exponent . "</sup> = " . sumExponentElements($elements, $exponent);
?>