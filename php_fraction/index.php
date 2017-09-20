<?php

	spl_autoload_register(function ($className) {
		$filename = "{$className}.php";
		if (!file_exists($filename)) {
			exit("{$filename} not found !");
		}
		require $filename;
	});

	require 'functions.php';

	$msg = requestGet('msg');
	$resAdd = $fractionAdd = $fractionMultiply = '';

	if ($_POST) {
		
		if (formIsValid()) {

			try {
				$fractionA = getFraction(requestPost('numeratorA'), requestPost('denominatorA'));
				$fractionB = getFraction(requestPost('numeratorB'), requestPost('denominatorB'));

				if ($fractionA && $fractionB) {
					$strFractionA = (string) $fractionA;
					$strFractionB = (string) $fractionB;
					$fractionAdd = Fraction::add($fractionA, $fractionB);
					$fractionMultiply = Fraction::multiply($fractionA, $fractionB);
					saveOperationToLog($strFractionA, $strFractionB, $fractionMultiply, $fractionAdd);
					$msg = "New log's record added successfully";
				}
			} catch (\PDOException $e) {
				exit("PDO error: {$e->getMessage()}");
			} catch(\Exception $e) {
				exit("{$e->getMessage()}");
			}

		} else {
			$msg = 'Form was submitted - invalid';
		}
	}

	require 'layout.phtml';