<?="B6. Подсчитать в тексте максимальное количество цифр, идущих подряд.<br><br>"?>

	<form name="inputForm" method="POST" action="<?=$_SERVER['PHP_SELF']?>">
	Введите текст: <input type="text" name="inputText">
	<input type="submit">
	</form>

<?php
	if (!isset($_POST['inputText'])) {
		exit();
	}
	
	$inputText = trim($_POST['inputText']);
	$maxTogether = $currentTogether = 0;

	for ($i = 0; $i < strlen($inputText); $i++) {

		if (isset($prevSymbol) && $inputText[$i] === $prevSymbol && ctype_digit($inputText[$i])) {
			$currentTogether++;
		} else {
			$currentTogether = 1;
		}
		$prevSymbol = $inputText[$i];
		$maxTogether = max($maxTogether, $currentTogether);

	}

	echo "Введенный текст: '$inputText'<br>";
	echo "Максимальное количество цифр идущих подряд = $maxTogether.";

?>