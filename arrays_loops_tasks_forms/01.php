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

	function getStrColumn($key) {
		$strRes = '';
		$elements = explode(',', trim(requestPost($key)));
		foreach ($elements as $value) {
			$strRes .= "{$value}<br>";
		}
		return $strRes;
	}

	if ($_POST) {
		if (formIsValid($keyInputArr)) {
			$strRes = getStrColumn($keyInputArr);
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
	<title>Task 01</title>
</head>

<body>
	<h3>1. Введите массив с элементами (через запятую). С помощью цикла foreach выведите эти слова в столбик.</h3>

	<form method = 'POST'>
		<input type = 'text' name = <?= $keyInputArr ?> style = 'width: 50%;' value = '<?= requestPost($keyInputArr) ?>'>
		<button>Go</button>
	</form><br>

	<b>Result:</b><br>
	<?= $strRes ?>
</body>
</html>