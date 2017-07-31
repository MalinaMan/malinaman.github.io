<?php
	$error = '';
	$keyInputArr = 'inputArray';
	
	function requestPost($key) {
		return isset($_POST[$key]) ? $_POST[$key] : null;
	}

	function formIsValid($key) {
		global $error;

		$strArr = trim(requestPost($key));
		if ($strArr === null) {
			$error = "Error getting the form element by the '{$key}' key";
			return false;
		}
		if (strlen($strArr) === 0) {
			$error = "The array must have at least one element.";
			return false;
		}
		$arr = explode(',', $strArr);
		foreach ($arr as $value) {
			if (!is_numeric($value)) {
				$error = "Not all elements are represented as a number.";
				return false;
			}
			if ((int)$value < 1 || (int)$value > 7) {
				$error = "The number of the week day should be in the range from 1 to 7.";
				return false;
			}
		}

		return true;
	}

	function getResultWeekStr($arrDays) {
		$arr = [1 => 'Mon', 2 => 'Tue', 3 => 'Wed', 4 => 'Thur', 5 => 'Fri', 6 => 'Sat', 7 => 'Sun'];
		$str = '';

		foreach ($arrDays as $key => $value) {
			$arrDays[$key] = (int)$value;
		}
		foreach ($arr as $key => $value) {
			$str .= ((in_array($key, $arrDays, true)) ? "<b>{$value}</b>" : $value) . '</br>';
		}
		return $str;
	}

	if ($_POST) {
		if (formIsValid($keyInputArr)) {
			$strRes = getResultWeekStr(explode(',', requestPost($keyInputArr)));
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
	<title>Task 18</title>
</head>

<body>
	<h3>18. Составьте массив дней недели. С помощью цикла foreach выведите все дни недели, введенные дни (номер дня недели введенные через запятую) следует вывести жирным.</h3>

	<form method = 'POST' style = 'line-height: 2'>
		Enter days of the week: <input type = 'text' name = <?= $keyInputArr ?> style = 'width: 10%;' value = '<?= requestPost($keyInputArr) ?>'>
		<button>Go</button>
	</form><br>

	<?= $strRes ?>
</body>
</html>