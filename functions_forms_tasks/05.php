<?php

require 'functions.php';

function getListFilesIncludeWord($folder, $needle) {
    $arr = scandir($folder);
    $arr = array_filter($arr, function($val) {
        global $folder, $needle;
        return !(is_dir("{$folder}/{$val}")) && stristr($val, $needle);
    });
    return $arr;
}

function formIsValid()
{
    $folder = trim(requestPost('folderLocation'));
    $needle = trim(requestPost('needle'));
    return !(empty($folder)) && is_dir($folder) && !(empty($needle)) ;
}

$filesArr = [];
$msg = requestGet('msg');
if ($_POST) {
    if (formIsValid()) {
        $folder = requestPost('folderLocation');
        $needle = requestPost('needle');
        $filesArr = getListFilesIncludeWord($folder, $needle);
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_05.phtml';