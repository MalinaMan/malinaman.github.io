<?php

require 'functions.php';

function getLongestWords($m, $q) {
    
    $arr = getArrayFromTextarea($m);
    usort($arr, function($a, $b) {
        return (mb_strlen($a) > mb_strlen($b)) ? -1 : 1;
    });
    return array_slice($arr, 0, $q);
}

function formIsValid()
{
    $message = trim(requestPost('message'));
    return strlen($message);
}

$topWordsArr = [];
$msg = requestGet('msg');
if ($_POST) {
    
    if (formIsValid()) {        
        $message = requestPost('message');
        $topWordsArr = getLongestWords($message, 3);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_02.phtml';