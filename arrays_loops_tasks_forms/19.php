<?php
	$error = '';
	$keyInputD = 'numberD';
	
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
		if ((int)$strN < 1 || (int)$strN > 7) {
			$error = "The number day of the week should be in the range from 1 to 7.";
			return false;
		}

		return true;
	}

	function getResultWeekStr($inputDay) {
		$arr = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
		$str = '';
		foreach ($arr as $key => $value) {
			$str .= (($key === $inputDay - 1) ? "<i>{$value}</i>" : $value) . '</br>';
		}
		return $str;
	}

	if ($_POST) {
		if (formIsValid($keyInputD)) {
			$strRes = getResultWeekStr(requestPost($keyInputD));
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
	<title>Task 19</title>
</head>

<body>
	<h3>19. Составьте массив дней недели. С помощью цикла foreach выведите все дни недели, а
введенный день выведите курсивом.</h3>

	<form method = 'POST'>
		Enter number day of the week (1-7): <input type = 'text' name = <?= $keyInputD ?> style = 'width: 10%;' value = '<?= requestPost($keyInputD) ?>'>
		<button>Go</button>
	</form><br>

	<?= $strRes ?>
</body>
</html>