<?php

require 'functions.php';

function getListFiles($folder) {
    $arr = scandir($folder);
    $arr = array_filter($arr, function($val) use($folder) {
        return !(is_dir("{$folder}/{$val}"));
    });
    return $arr;
}

function formIsValid()
{
    $folder = trim(requestPost('folderLocation'));
    return !(empty($folder)) && is_dir($folder);
}

$filesArr = [];
$msg = requestGet('msg');
if ($_POST) {
    if (formIsValid()) {
        $folder = requestPost('folderLocation');
        $filesArr = getListFiles($folder);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_04.phtml';