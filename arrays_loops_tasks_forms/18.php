<?php
	echo "18. Составьте массив дней недели. С помощью цикла foreach выведите все дни недели,
выходные дни следует вывести жирным.<br><br>";

	$arr = [1 => 'Mon', 2 => 'Tue', 3 => 'Wed', 4 => 'Thur', 5 => 'Fri', 6 => 'Sat', 7 => 'Sun'];
	$str = '';

	foreach ($arr as $key => $value) {
		$str .= (($key >= 6) ? "<b>{$value}</b>" : $value) . '</br>';
	}

	echo $str;
?>