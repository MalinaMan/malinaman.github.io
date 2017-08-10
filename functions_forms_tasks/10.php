<?php

require 'functions.php';

function countUniqueWords($str) {
    
    $str = str_replace(PHP_EOL, ' ', $str);
    $arr = explode(' ', $str);
    $arr = array_unique($arr);
    return count($arr);
}

function formIsValid()
{
    $message = trim(requestPost('inputText'));
    return strlen($message);
}

$res = '';
$msg = requestGet('msg');
if ($_POST) {
    
    if (formIsValid()) {        
        $message = requestPost('inputText');
        $res = countUniqueWords($message);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_10.phtml';