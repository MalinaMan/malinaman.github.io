<?php
	echo "1. Дан массив с элементами 'html', 'css', 'php', 'js', 'jq'. С помощью цикла foreach выведите эти слова в столбик.<br><br>";
	$elements = ['html', 'css', 'php', 'js', 'jq'];

	foreach ($elements as $value) {
		echo "{$value}<br>";
	}
?>