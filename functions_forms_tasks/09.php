<?php

require 'functions.php';

function getReverseString($str) {
    preg_match_all('/./u', $str, $ar); // разобрали слово на массив с букв (кириллических в том числе)
    return join('', array_reverse($ar[0])); // u - для кодировки utf-8
}

function formIsValid()
{
    $str = trim(requestPost('strForTranform'));
    return strlen($str);
}

$strReverse = '';
$msg = requestGet('msg');
if ($_POST) {
    
    if (formIsValid()) {        
        $strBefore = requestPost('strForTranform');
        $strReverse = getReverseString($strBefore);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_09.phtml';