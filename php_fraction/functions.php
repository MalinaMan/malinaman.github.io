<?php

	function requestPost($key, $default = null)
	{
	    return isset($_POST[$key]) ? $_POST[$key] : $default;
	}

	function requestGet($key, $default = null)
	{
	    return isset($_GET[$key]) ? $_GET[$key] : $default;
	}

	function formIsValid()
	{
	    $numeratorA   = requestPost('numeratorA');
	    $denominatorA = requestPost('denominatorA');
	    $numeratorB   = requestPost('numeratorB');
	    $denominatorB = requestPost('denominatorB');
	    return (is_numeric($numeratorA) && is_numeric($numeratorB)
	    	 && is_numeric($denominatorA) && is_numeric($denominatorB));
	}

	function getFraction($numerator, $denominator)
	{
		try {
			return new Fraction((int) $numerator, (int) $denominator);
		} catch (Exception $e) {
			global $msg;
			$msg = $e->getmessage();
			return false;
		}
	}

	function saveOperationToLog(string $a, string $b, Fraction $resM, Fraction $resA)
	{
		$dbName = 'fraction';

		// $link = new mysqli('localhost', 'root', '', $dbName);
		// if ($link->connect_error) {
		// 	$msg = "Connection failed: " . $conn->connect_error;
		// 	return false;
		// }
		// $currentDate = date('Y-m-d H:i:s');
		// $sql = "INSERT INTO log VALUES (null, '{$a}', '{$b}', '{$resM}', '{$resA}', '{$currentDate}')";

		// if ($link->query($sql) !== TRUE) {
		// 	$msg = "Error: " . $sql . "<br>" . $link->error;
		// 	$link->close();
		// 	return false;
		// }

		// $msg = "New log's record added successfully";
		// $link->close();
		// return true;

		$dsn = 'mysql: host=localhost; dbname=' . $dbName;
		$user = 'root';
		$pass = '';
		$curDate = (new \DateTime())->format('Y-m-d H:i:s');

		$pdo = new PDO($dsn, $user, $pass);
		$pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		$sql = "INSERT INTO log VALUES(NULL, :a, :b, :strM, :strA, :curDate)";
		$sth = $pdo->prepare($sql);
		$strM = (string) $resM;
		$strA = (string) $resA;
		return $sth->execute(compact('a', 'b', 'strM', 'strA', 'curDate'));
	}