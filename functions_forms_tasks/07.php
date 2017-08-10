<?php

require 'functions.php';

function formIsValid()
{
    $message = trim(requestPost('message'));
    return (strlen($message));
}

function addMessage()
{
    $message = $_POST;
    array_unshift($message, date('YmdHis'));
    return file_put_contents('messages.txt', json_encode(serialize($message)) . PHP_EOL, FILE_APPEND);
}

$allMessages = [];
$msg = requestGet('msg');
if ($_POST) {
    if (formIsValid()) {        
        $res = addMessage();
        if ($res === false) {
            $msg = 'Error: message not append in file';
        } else {
            $msg = 'Message saved';
        }
    } else {
        $msg = 'form was submitted - invalid';
    }
}

$serializedMessages = file('messages.txt');
$allMessages = [];

foreach ($serializedMessages as $s) {
    $arr = unserialize(json_decode($s));
    $arr[0] = date_format(date_create_from_format('YmdHis', $arr[0]), 'Y-m-d H:i:s');
    $allMessages[] = implode(';  ', $arr);
}

require 'layout_07.phtml';