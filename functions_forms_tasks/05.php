<?php

require 'functions.php';

function getListFilesIncludeWord($folder, $needle) {
    $arr = scandir($folder);
    $arr = array_filter($arr, function($val) use($folder, $needle) {
        return !(is_dir("{$folder}/{$val}")) && stristr($val, $needle);
    });
    return $arr;
}

function formIsValid()
{
    global $msg;
    $folder = trim(requestPost('folderLocation'));
    $needle = trim(requestPost('needle'));
    if ($folder === '') {
        $msg = "form was submitted - invalid (empty 'Input path')";
    } elseif ($needle === '') {
        $msg = "form was submitted - invalid (empty 'Input needle')";
    } elseif (!is_dir($folder)) {
        $msg = "form was submitted - invalid (path does not exist)";
    }
    return empty($msg);
}

$filesArr = [];
$msg = requestGet('msg');
if ($_POST && formIsValid()) {
    $folder = requestPost('folderLocation');
    $needle = requestPost('needle');
    $filesArr = getListFilesIncludeWord($folder, $needle);
}

require 'layout_05.phtml';