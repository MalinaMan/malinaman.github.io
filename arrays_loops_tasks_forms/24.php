<?="24. Вам нужно разработать программу, которая считала бы количество вхождений
какой­нибудь выбранной вами цифры в выбранном вами числе. Например: цифра 5 в числе
442158755745 встречается 4 раза<br><br>"?>

<form name="inputForm" method="POST" action="<?=$_SERVER['PHP_SELF']?>">
	Введите число (в котором искать вхождения): <input type="text" name="inputNumber"><br>
	Введите цифру: <input type="text" name="searchNumber">
	<input type="submit">
	</form>

<?php
	if (!isset($_POST['inputNumber']) || !isset($_POST['searchNumber'])) {
		exit();
	}

	$inputNumber  = trim($_POST['inputNumber']);
	$searchNumber = trim($_POST['searchNumber']);
	if (!ctype_digit($inputNumber) || !ctype_digit($searchNumber)) {
		echo 'Введенное значение не ЧИСЛО !';
		exit();
	}

	$quantity = 0;
	for ($i = 0; $i < strlen($inputNumber); $i++) {
		$quantity += ($inputNumber[$i] === $searchNumber) ? 1 : 0;
	}

	echo "Цифра {$searchNumber} в числе {$inputNumber} встречается {$quantity} раз(-a).";
?>