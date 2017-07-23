<?="B7. Проверить строку на симметричность.<br><br>"?>

	<form name="inputForm" method="POST" action="<?=$_SERVER['PHP_SELF']?>">
	Введите текст: <input type="text" name="inputText">
	<input type="submit">
	</form>

<?php
	if (!isset($_POST['inputText'])) {
		exit();
	}
	
	$inputText = trim($_POST['inputText']);
	$symmetric = true;

	$lengthStr = strlen($inputText);
	$middle = round($lengthStr / 2);

	for ($i = 0; $i < $middle; $i++) {
		if ($inputText[$i] !== $inputText[$lengthStr - $i - 1]) {
			$symmetric = false;
			break;
		}
	}

	echo "Введенная строка: '$inputText'<br>";
	echo 'Строка ' . ($symmetric ? '' : 'НЕ') . ' симметрична !';

?>