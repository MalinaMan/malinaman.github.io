<?php

require 'functions.php';

function getCommonWords($a, $b) {
    
    $arr1 = getArrayFromTextarea($a);
    $arr2 = getArrayFromTextarea($b);
    return array_intersect($arr1, $arr2);
}

function formIsValid()
{
    $message1 = trim(requestPost('message1'));
    $message2 = trim(requestPost('message2'));
    return (strlen($message1)) && (strlen($message2));
}

$commonArr = [];
$msg = requestGet('msg');
if ($_POST) {
    
    if (formIsValid()) {        
        $message1 = requestPost('message1');
        $message2 = requestPost('message2');
        $commonArr = getCommonWords($message1, $message2);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_01.phtml';