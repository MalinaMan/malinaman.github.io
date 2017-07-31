<?php
	$error = '';
	$keyInputM = 'numberM';
	
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
		if (!is_numeric($strN)) {
			$error = "Field '{$key}' isn't represented as a number.";
			return false;
		}
		if ((int)$strN < 1 || (int)$strN > 12) {
			$error = "The number of the month should be in the range from 1 to 12.";
			return false;
		}

		return true;
	}

	function getResultMonthsStr($currentMonth) {
		$arrMonths = ['Ja', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		$month = $currentMonth - 1;
		$str = '';
		
		foreach ($arrMonths as $key => $value) {
			$str .= (($key === $month) ? "<b>{$value}</b>" : $value) . '</br>';
		}
		return $str;
	}

	if ($_POST) {
		if (formIsValid($keyInputM)) {
			$strRes = getResultMonthsStr(requestPost($keyInputM));
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
	<title>Task 17</title>
</head>

<body>
	<h3>17. Составьте массив месяцев. С помощью цикла foreach выведите все месяцы, а введенный
месяц (число в диапазоне от 1 до 12) выведите жирным. Текущий месяц должен храниться в переменной month.</h3>

	<form method = 'POST' style = 'line-height: 2'>
		Enter current month: <input type = 'text' name = <?= $keyInputM ?> style = 'width: 10%;' value = '<?= requestPost($keyInputM) ?>'>
		<button>Go</button>
	</form><br>

	<?= $strRes ?>
</body>
</html>
