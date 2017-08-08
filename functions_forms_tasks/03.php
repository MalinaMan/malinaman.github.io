<?php

require 'functions.php';

function clearFileFromWordsLongerN($N) {
    $filename = 'words.txt';
    $str = file_get_contents($filename);
    $str = str_replace('.', ' ', $str);
    $arr = getArrayFromTextarea($str);
    
    $arr = array_filter($arr, function($val){
        global $N;
        return (mb_strlen($val) <= $N);
    });

    file_put_contents($filename, implode(' ', $arr));
    
    return $arr;
}

function formIsValid()
{
    $numberN = trim(requestPost('numberN'));
    return is_numeric($numberN);
}

$remainWordsArr = [];
$msg = requestGet('msg');
if ($_POST) {
    
    if (formIsValid()) {        
        $N = requestPost('numberN');
        $remainWordsArr = clearFileFromWordsLongerN((int) $N);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_03.phtml';