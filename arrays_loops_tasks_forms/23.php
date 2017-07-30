<?="23. Вам нужно разработать программу, которая считала бы сумму цифр числа введенного пользователем. Например: есть число 123, то программа должна вычислить сумму цифр 1, 2, 3, т. е. 6.<br>По желанию можете сделать проверку на корректность введения данных пользователем.<br><br>"?>

	<form name="inputForm" method="POST" action="<?=$_SERVER['PHP_SELF']?>">
	Введите число: <input type="text" name="inputUser">
	<input type="submit">
	</form>

<?php
	if (!isset($_POST['inputUser'])) {
		exit();
	}

	$inputUser = trim($_POST['inputUser']);
	if (!ctype_digit($inputUser)) {
		echo 'Введенное значение не ЧИСЛО !';
		exit();
	}

	$sum = 0;
	for ($i = 0; $i < strlen($inputUser); $i++) {
		$sum += $inputUser[$i];
	}
	
	echo "Сумма всех цифр числа {$inputUser} = {$sum}";
?>