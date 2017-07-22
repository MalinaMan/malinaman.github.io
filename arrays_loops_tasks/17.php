<?php
	echo "17. Составьте массив месяцев. С помощью цикла foreach выведите все месяцы, а текущий
месяц выведите жирным. Текущий месяц должен храниться в переменной \$month.<br><br>";

	$arrMonths = ['Ja', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	$month = date('n') - 1;
	$str = '';

	foreach ($arrMonths as $key => $value) {
		$str .= (($key === $month) ? "<b>{$value}</b>" : $value) . '</br>';
	}

	echo "Текущий месяц: {$arrMonths[$month]}<br><br>{$str}";
?>