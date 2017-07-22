<?php
	echo "22. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for или while.<br><br>";

	$str = '';
	for ($i = 1; $i <= 5; $i++) {
		$str .= str_repeat('xx', $i) . '</br>';
	}

	echo $str;
?>