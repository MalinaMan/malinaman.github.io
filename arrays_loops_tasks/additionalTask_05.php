<?="B5. Определить, является ли строка правильной записью целого числа.<br><br>"?>

	<form name="inputForm" method="POST" action="<?=$_SERVER['PHP_SELF']?>">
	Введите текст: <input type="text" name="inputText">
	<input type="submit">
	</form>

<?php
	if (!isset($_POST['inputText'])) {
		exit();
	}
	$inputText = trim($_POST['inputText']);

	if (ctype_digit($inputText)) {
		echo "Строка '$inputText' является правильной записью целого числа !";
	} else {
		echo "Строка '$inputText' НЕ является правильной записью целого числа !";
	}

?>