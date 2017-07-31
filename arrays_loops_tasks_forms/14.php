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
			if (!is_numeric(trim($value))) {
				$error = "Not all elements are represented as a number.";
				return false;
			}
		}
		$strNumberSearch = requestPost('numberSearch');
		if (strlen(trim($strNumberSearch)) === 0) {
			$error = "No search number entered";
			return false;
		}
		if (!is_numeric(trim($strNumberSearch))) {
			$error = "The number to search for must be a number.";
			return false;
		}

		return true;
	}

	function checkEntryInArray($arr, $searchValue) {
		foreach ($arr as $key => $value) {
			$arr[$key] = (float)$value;
		}
		if (in_array($searchValue, $arr, true)) {
			return 'Found';
		}
		return 'Not found';
	}

	if ($_POST) {
		if (formIsValid($keyInputArr)) {
			$elements = explode(',', trim(requestPost($keyInputArr)));
			$strRes = checkEntryInArray($elements, (float)requestPost('numberSearch'));
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
	<title>Task 14</title>
</head>

<body>
	<h3>14. Введите массив с элементами (через запятую). С помощью цикла foreach и оператора if проверьте есть ли в массиве элемент с введенным значением. Если есть — выведите на экран 'Есть!', иначе выведите 'Нет!'.</h3>

	<form method = 'POST' style = 'line-height: 2'>
		Array: <input type = 'text' name = <?= $keyInputArr ?> style = 'width: 50%;' value = '<?= requestPost($keyInputArr) ?>'><br>
		Number to search: <input type = 'text' name = 'numberSearch' style = 'width: 10%;' value = '<?= requestPost('numberSearch') ?>'>
		<button>Go</button>
	</form><br>

	<b>Result: </b><?= $strRes ?>
</body>
</html>
