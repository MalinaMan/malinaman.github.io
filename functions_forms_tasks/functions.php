<?php

function redirect($to)
{
    header("Location: {$to}");
    die;
}

function requestPost($key, $default = null)
{
    return isset($_POST[$key]) ? $_POST[$key] : $default;
}

function requestGet($key, $default = null)
{
    return isset($_GET[$key]) ? $_GET[$key] : $default;
}

function getArrayFromTextarea($str)
{
	$str = str_replace(PHP_EOL, ' ', $str);
    $arr = explode(' ', $str);
    $arr = array_diff($arr, array(''));
    return $arr;
}
