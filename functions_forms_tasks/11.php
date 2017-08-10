<?php

require 'functions.php';

function getTextToUpperCaseFirstSentence($str) {

    $str = preg_replace_callback("/.*?[.](?:\s|$)/s",
        function ($matches) {
            return mb_strtoupper(mb_substr($matches[0], 0, 1)) . mb_substr($matches[0], 1);
        }, $str);

    return $str;
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
        $res = getTextToUpperCaseFirstSentence($str);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_11.phtml';