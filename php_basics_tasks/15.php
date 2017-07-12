<?php
	$a = 11;
	$b = 3;
	$operator = '%';

	if ($b == 0 && ($operator == '/' || $operator == '%')) {
		echo "ошибка деления на 0" . "<br>";}
	else {
		eval('$result = $a' . $operator . '$b;');
		echo "Результат вычисления калькулятора: " . $result . "<br>";
	}
?>