<?php
	$error = '';
	$keyInputN = 'numberN';
	
	function requestPost($key) {
		return isset($_POST[$key]) ? $_POST[$key] : null;
	}

	function formIsValid($key) {
		global $error;

		$strN = requestPost($key);
		if ($strN === null) {
			$error = "Error getting the form element by the '{$key}' key";
			return false;
		}
		if (!is_numeric($strN)) {
			$error = "Field '{$key}' isn't represented as a number.";
			return false;
		}
		if ((int)$strN < 0) {
			$error = "'{$key}' must be greater than 0.";
			return false;
		}

		return true;
	}

	function getResultsOfDivision($n, $divider = 50) {
		$num = 0;
		while ($n >= $divider) {
			$n /= 2;
			$num++;
		}
		return [$n, $num];
	}

	if ($_POST) {
		if (formIsValid($keyInputN)) {
			$Res = getResultsOfDivision(requestPost($keyInputN));
			$strRes = "Result of division: {$Res[0]}<br> Number of iterations: {$Res[1]}";
		} else {
			$strRes = $error;
		}
	} else {
		$strRes = "Form wasn't submitted yet";
	}

	
?>

<!doctype html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<title>Task 12</title>
</head>

<body>
	<h3>12. Введите число 'n'. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для
этого (итерации — это количество проходов цикла).</h3>

	<form method = 'POST' style = 'line-height: 2'>
		Number 'n': <input type = 'text' name = <?= $keyInputN ?> style = 'width: 50%;' value = '<?= requestPost($keyInputN) ?>'>
		<button>Go</button>
	</form><br>

	<b><?= $strRes ?></b>
</body>
</html>