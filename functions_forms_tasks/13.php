<?php

require 'functions.php';

function countRepeatWords($str) {
    $arr = explode(' ', $str);
    $arr = array_count_values($arr);
    arsort($arr, SORT_NUMERIC);
    return $arr;
}

function formIsValid()
{
    $str = trim(requestPost('inputText'));
    return strlen($str);
}

$resList = [];
$msg = requestGet('msg');
if ($_POST) {
    
    if (formIsValid()) {        
        $str = requestPost('inputText');
        $resList = countRepeatWords($str);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_13.phtml';