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
		return true;
	}

	function getCountArray($arr) {
		$count = 0;
		foreach ($arr as $value) {
			$count++;
		}
		return $count;
	}

	if ($_POST) {
		if (formIsValid($keyInputArr)) {
			$strRes = getCountArray(explode(',', trim(requestPost($keyInputArr))));
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
	<title>Task 15</title>
</head>

<body>
	<h3>15. Введите массив arr (через запятую). С помощью цикла foreach и переменной count подсчитайте количество элементов этого массива.</h3>

	<form method = 'POST'>
		<input type = 'text' name = <?= $keyInputArr ?> style = 'width: 50%;' value = '<?= requestPost($keyInputArr) ?>'>
		<button>Go</button>
	</form><br>

	<b>Result (the quantity of array elements): </b><?= $strRes ?>
</body>
</html>
