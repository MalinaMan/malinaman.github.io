<?php
	$error = '';
	$keyInputN = 'numberN';
	
	function requestPost($key) {
		return isset($_POST[$key]) ? $_POST[$key] : null;
	}

	function formIsValid($key) {
		global $error;

		$strN = trim(requestPost($key));
		if ($strN === null) {
			$error = "Error getting the form element by the '{$key}' key";
			return false;
		}
		if (!ctype_digit($strN)) {
			$error = "Field '{$key}' isn't represented as a number.";
			return false;
		}
		return true;
	}

	function sumNumeralsInNumber($number) {
		$sum = 0;
		for ($i = 0; $i < strlen($number); $i++) {
			$sum += $number[$i];
		}
		return $sum;
	}

	if ($_POST) {
		if (formIsValid($keyInputN)) {
			$strRes = "Sum of all digits of the number: " . sumNumeralsInNumber(requestPost($keyInputN));
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
	<title>Task 23</title>
</head>

<body>
	<h3>23. Вам нужно разработать программу, которая считала бы сумму цифр числа введенного пользователем. Например: есть число 123, то программа должна вычислить сумму цифр 1, 2, 3, т. е. 6.</h3>

	<form method = 'POST' style = 'line-height: 2'>
		Enter the number: <input type = 'text' name = <?= $keyInputN ?> style = 'width: 40%;' value = '<?= requestPost($keyInputN) ?>'>
		<button>Go</button>
	</form><br>

	<b><?= $strRes ?></b>
</body>
</html>