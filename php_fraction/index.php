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
			$fractionA = getFraction(requestPost('numeratorA'), requestPost('denominatorA'));
			$fractionB = getFraction(requestPost('numeratorB'), requestPost('denominatorB'));

			if ($fractionA && $fractionB) {
				$strFractionA = (string) $fractionA;
				$strFractionB = (string) $fractionB;
				$fractionAdd = Fraction::add($fractionA, $fractionB);
				$fractionMultiply = Fraction::multiply($fractionA, $fractionB);
				saveOperationToLog($strFractionA, $strFractionB, $fractionMultiply, $fractionAdd);
			}

		} else {
			$msg = 'Form was submitted - invalid';
		}
	}

	require 'layout.phtml';