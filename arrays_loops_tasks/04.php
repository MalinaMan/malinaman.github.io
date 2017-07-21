<?php
	echo "4. Дан массив \$arr. С помощью первого цикла foreach выведите на экран столбец ключей, с
помощью второго — столбец элементов.<br><br>";

	$arr = array('green'=>'зеленый', 'red'=>'красный','blue'=>'голубой');

	echo '<b>Ключи</b><br>';
	foreach ($arr as $key => $value) {
		echo "{$key}<br>";
	}

	echo '<br><b>Значения</b><br>';
	foreach ($arr as $value) {
		echo "{$value}<br>";
	}
?>