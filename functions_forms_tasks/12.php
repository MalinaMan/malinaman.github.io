<?php

require 'functions.php';

function getReverseSentence($str) {

    $arr = explode('.', $str);
    $arr = array_diff($arr, array(''));
    $arr = array_reverse($arr);
    array_walk($arr, function(&$val, $key) {
        $val = trim($val);
    });
    return implode('. ', $arr) . '.';
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
        $str = trim(requestPost('inputText'));
        $res = getReverseSentence($str);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_12.phtml';