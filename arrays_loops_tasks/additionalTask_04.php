<?="B4. Определить, правильно ли в тексте расставлены круглые скобки.<br><br>"?>

	<form name="inputForm" method="POST" action="<?=$_SERVER['PHP_SELF']?>">
	Введите текст: <input type="text" name="inputText">
	<input type="submit">
	</form>

<?php
	if (!isset($_POST['inputText'])) {
		exit();
	}
	$inputText = trim($_POST['inputText']);
	$bracketOpen = 0;
	$success = true;	// по умолчанию скобки расставлены верно (их может и не быть вообще)

	for ($i = 0; $i < strlen($inputText); $i++) {
		
		if ($inputText[$i] === '(') {
			$bracketOpen++;
		} elseif ($inputText[$i] === ')') {
			$bracketOpen--;
		}

		if ($bracketOpen < 0) {
			$success = false;	// если первая закрывающая скобка, то ошибка
			break;
		}
	}

	if ($bracketOpen !== 0) {
		$success = false;
	}

	echo "Введенный текст: '$inputText'<br>";
	echo "Скобки расставлены: " . ($success ? 'ВЕРНО' : 'НЕВЕРНО') . ' !';
?>