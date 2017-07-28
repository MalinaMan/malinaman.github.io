<?php
	function separateArray($arr) {
		$en = $ru = array();
		foreach ($arr as $key => $value) {
			$en[] = $key;
			$ru[] = $value;
		}
		return ['en' => $en, 'ru' => $ru];
	}

	echo "6. Дан массив \$arr. С помощью цикла foreach запишите английские названия в массив \$en, а
русские — в массив \$ru.<br><br>";
	$arr = array('green'=>'зеленый',
				 'red'=>'красный',
				 'blue'=>'голубой');
	
	$resArr = separateArray($arr);
	print_r($resArr['en']);
	echo '<br>';
	print_r($resArr['ru']);
?>