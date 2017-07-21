<?php
	echo "6. Дан массив \$arr. С помощью цикла foreach запишите английские названия в массив \$en, а
русские — в массив \$ru.<br><br>";
	$arr = array('green'=>'зеленый',
				 'red'=>'красный',
				 'blue'=>'голубой');

	$en = array();
	$ru = array();

	foreach ($arr as $key => $value) {
		$en[] = $key;
		$ru[] = $value;
	}

	print_r($en);
	echo '<br>';
	print_r($ru);
?>