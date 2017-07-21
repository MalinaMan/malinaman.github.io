<?php
	$table = [];

	for ($x = 1; $x < 10 ; $x++) { 
		$table[$x] = [];
		for ($y = 1; $y < 10; $y++) { 
			$table[$x][$y] = $x * $y;
		}
	}

?>

<!DOCTYPE HTML>
<head>
    <meta charset='UTF-8'>
</head>

<html>
    <body>
		<table>
			<?php foreach ($table as $rowKey => $row): ?>
				<tr>
					<?php foreach ($row as $colKey => $value) : ?>
						<td><?=$value?></td>
					<?php endforeach; ?>
				</tr>
			<?php endforeach; ?>
		</table>
    </body>
</html>