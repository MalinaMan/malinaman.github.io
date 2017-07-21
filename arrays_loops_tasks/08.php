<?php
	echo "8. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла foreach создайте строку
'123456789'.<br><br>";

	$arr = range(1, 9);
	$strResult = '';
	foreach ($arr as $value) {
		$strResult .= $value;
	}
	//$strResult = implode('', $arr);	можно короче
	echo $strResult;
?>