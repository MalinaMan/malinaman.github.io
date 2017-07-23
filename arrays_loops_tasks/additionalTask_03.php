<?php
	echo "B3. Дан текст. Определить какая из двух заданных букв встречается чаще.<br><br>";

	$text = "Исходный текст: Lewis Carroll is the pseudonym of mathematician Charles Lutwidge Dodgson, which he adopted when publishing his famous children’s novels and nonsense verse.";
	echo "{$text}<br>"; ?>

	<form name="inputForm" method="POST" action="<?=$_SERVER['PHP_SELF']?>">
	Введите букву 1: <input type="text" name="inputSymbol1">
	Введите букву 2: <input type="text" name="inputSymbol2">
	<input type="submit">
	</form>

<?php
	if (!isset($_POST['inputSymbol1']) || !isset($_POST['inputSymbol2'])) {
		exit();
	}
	$inputSymbol1 = trim($_POST['inputSymbol1']);
	$inputSymbol2 = trim($_POST['inputSymbol2']);
	$quantity1 = $quantity2 = 0;

	for ($i = 0; $i < strlen($text); $i++) {
		if ($text[$i] === $inputSymbol1) {
			$quantity1++;
		}
		if ($text[$i] === $inputSymbol2) {
		 	$quantity2++;
		}
	}
	echo "Буква '{$inputSymbol1}' встречается {$quantity1} раз.<br>";
	echo "Буква '{$inputSymbol2}' встречается {$quantity2} раз.<br>";

	if ($quantity1 > $quantity2) {
		echo "Буква '{$inputSymbol1}' встречается чаще чем буква '{$inputSymbol2}'.<br>";
	} elseif ($quantity1 < $quantity2) {
		echo "Буква '{$inputSymbol2}' встречается чаще чем буква '{$inputSymbol1}'.<br>";
	} else {
		echo "Буквы '{$inputSymbol1}' и '{$inputSymbol2}' встречаются одинаковое кол-во раз.<br>";
	}
	
?>
