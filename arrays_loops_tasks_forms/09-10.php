<?php
	$error = '';
	
	function requestPost($key) {
		return isset($_POST[$key]) ? $_POST[$key] : null;
	}

	function formIsValid($key) {
		global $error;

		$strN1 = requestPost('numberFrom');
		$strN2 = requestPost('numberTo');
		if (($strN1 === null) || ($strN2 === null)) {
			$error = "Error getting the form element by the 'numberFrom' or/and 'numberTo' key";
			return false;
		}
		if (!is_numeric($strN1) || !is_numeric($strN2)) {
			$error = "Fields 'numberFrom' or/and 'numberTo' aren't represented as a number.";
			return false;
		}
		if ((int)$strN1 >= (int)$strN2) {
			$error = "'NumberFrom' must be less than the 'NumberTo'.";
			return false;
		}

		return true;
	}

	function getColumnRangeFromN1toN2($n1, $n2) {
		$str = '';
		for ($i = $n1; $i <= $n2; $i++) {
			$str .= "{$i}<br>";
		}
		return $str;
	}

	if ($_POST) {
		if (formIsValid($keyInputArr)) {
			$strRes = getColumnRangeFromN1toN2(requestPost('numberFrom'), requestPost('numberTo'));
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
	<title>Task 09</title>
</head>

<body>
	<h3>9. Выведите столбец целых чисел от числа N1 до числа N2.</h3>

	<form method = 'POST' style = 'line-height: 2'>
		Number from: <input type = 'text' name = 'numberFrom' style = 'width: 10%;' value = '<?= requestPost('numberFrom') ?>'><br>
		Number to: <input type = 'text' name = 'numberTo' style = 'width: 10%;' value = '<?= requestPost('numberTo') ?>'>
		<button>Go</button>
	</form><br>

	<b>Result: </b><br><?= $strRes ?>
</body>
</html>
