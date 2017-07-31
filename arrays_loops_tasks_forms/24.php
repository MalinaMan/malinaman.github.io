<?php
	$error = '';
	$keyInputN = 'numberN';
	$keyInputS = 'numberS';
	
	function requestPost($key) {
		return isset($_POST[$key]) ? $_POST[$key] : null;
	}

	function formIsValid($key, $keyS) {
		global $error;

		$strN = trim(requestPost($key));
		$strS = trim(requestPost($keyS));
		if ($strN === null) {
			$error = "Error getting the form element by the '{$key}' key";
			return false;
		}
		if ($strS === null) {
			$error = "Error getting the form element by the '{$keyS}' key";
			return false;
		}
		if (!ctype_digit($strN)) {
			$error = "Field '{$key}' isn't represented as a number.";
			return false;
		}
		if (!ctype_digit($strS)) {
			$error = "Field '{$keyS}' isn't represented as a number.";
			return false;
		}

		return true;
	}

	function countDigitInNumber($number, $digit) {
		$quantity = 0;
		for ($i = 0; $i < strlen($number); $i++) {
			$quantity += ($number[$i] === $digit) ? 1 : 0;
		}
		return $quantity;
	}

	if ($_POST) {
		if (formIsValid($keyInputN, $keyInputS)) {
			$strRes = "The digit occurs times: " . countDigitInNumber(requestPost($keyInputN), trim(requestPost($keyInputS)));
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
	<title>Task 24</title>
</head>

<body>
	<h3>24. Вам нужно разработать программу, которая считала бы количество вхождений какой­нибудь выбранной вами цифры в выбранном вами числе. Например: цифра 5 в числе 442158755745 встречается 4 раза.</h3>

	<form method = 'POST' style = 'line-height: 2'>
		Enter the number (in which to search for entries): <input type = 'text' name = <?= $keyInputN ?> style = 'width: 40%;' value = '<?= requestPost($keyInputN) ?>'><br>
		Enter the digit: <input type = 'text' name = <?= $keyInputS ?> style = 'width: 10%;' value = '<?= requestPost($keyInputS) ?>'><br>
		<button>Go</button>
	</form><br>

	<b><?= $strRes ?></b>
</body>
</html>