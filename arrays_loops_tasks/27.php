<?php
	echo "27. Создать генератор случайных таблиц. Есть переменные: \$rows - кол-во строк в таблице, \$cols - кол-во столбцов в таблице. Необходимо создать скрипт, который по заданным условиям выведет таблицу размера \$rows на \$cols, в которой все ячейки будут иметь цвета, выбранные случайным образом. В каждой ячейке должно находиться случайное число.<br><br>";

	$cols = rand(3, 10);
	$rows = rand(5, 8);

	echo '<table style="font-weight: bold">';
	for ($i = 0; $i < $rows; $i++) {
		echo '<tr>';
		for ($j = 0; $j < $cols; $j++) {
			$r = dechex(rand(0, 255));
			$g = dechex(rand(0, 255));
			$b = dechex(rand(0, 255));
			$color = "#$r$g$b";
			$style = "style='background: $color; padding: 10px;'";
			echo "<td $style>" . rand(0, 99) . "</td>";
		}
		echo '</tr>';
	}
	echo '</table>';
?>