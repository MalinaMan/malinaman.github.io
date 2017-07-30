<?php
	$error = '';
	$keyInputArr = 'inputArray';
	
	function requestPost($key) {
		return isset($_POST[$key]) ? $_POST[$key] : null;
	}

	function formIsValid($key) {
		global $error;
		$strArr = requestPost($key);
	
		if ($strArr === null) {
			$error = "Error getting the form element by the '{$key}' key";
			return false;
		}
		if (strlen(trim($strArr)) === 0) {
			$error = "The array must have at least one element";
			return false;
		}
		$arr = explode(',', trim($strArr));
		foreach ($arr as $value) {
			if (!is_numeric($value)) {
				$error = "Not all elements of array are represented as a number.";
				return false;
			}
		}

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

		return true;
	}

	function getColumnRangeFromN1toN2($arr, $n1, $n2) {
		$str = '';
		foreach($arr as $value) {
			if ($value > $n1 && $value < $n2) {
				$str .= "{$value}<br>";
			}
		}
		return $str;
	}

	if ($_POST) {
		if (formIsValid($keyInputArr)) {
			$elements = explode(',', trim(requestPost($keyInputArr)));
			$strRes = getColumnRangeFromN1toN2($elements, requestPost('numberFrom'), requestPost('numberTo'));
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
	<title>Task 07</title>
</head>

<body>
	<h3>7. Введите массив (через запятую). С помощью цикла foreach и оператора if
выведите на экран столбец тех элементов массива, которые больше числа N1, но меньше числа N2.</h3>

	<form method = 'POST' style = 'line-height: 2'>
		Array: <input type = 'text' name = <?= $keyInputArr ?> style = 'width: 50%;' value = '<?= requestPost($keyInputArr) ?>'><br>
		N1:  <input type = 'text' name = 'numberFrom' style = 'width: 10%;' value = '<?= requestPost('numberFrom') ?>'><br>
		N2:  <input type = 'text' name = 'numberTo' style = 'width: 10%;' value = '<?= requestPost('numberTo') ?>'>
		<button>Go</button>
	</form><br>

	<b>Result: </b><br><?= $strRes ?>
</body>
</html>