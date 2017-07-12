<?php
	$day = 0;
	switch (true) {
		case ($day >= 1 && $day <= 5): echo "Это рабочий день" . "<br>"; break;
		case ($day == 6 || $day == 7): echo "Это выходной день" . "<br>"; break;
		default: echo "Неизвестный день" . "<br>";
	}
?>