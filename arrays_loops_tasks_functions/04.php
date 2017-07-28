<?php
	function output($arr, $printValues = false) {
		foreach ($arr as $key => $value) {
			echo ($printValues ? $value : $key) . "<br>";
		}
	}

	echo "4. Дан массив \$arr. С помощью первого цикла foreach выведите на экран столбец ключей, с
помощью второго — столбец элементов.<br><br>";

	$arr = array('green'=>'зеленый', 'red'=>'красный','blue'=>'голубой');

	echo '<b>Ключи</b><br>';
	output($arr);

	echo '<br><b>Значения</b><br>';
	output($arr, true);
?>