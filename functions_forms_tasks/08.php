<?php

require 'functions.php';

function formIsValid() {
    global $msg;
    $message = trim(requestPost('message'));

    if (!strlen($message)) {
        $msg = 'form was submitted - invalid';
        return false;
    }
    $swearWords = ['beach', 'crap', 'shit', 'asshole', 'fuck'];
    $count = 0;
    str_ireplace($swearWords, "***" , $message, $count);
    if ($count) {
        $msg = 'Incorrect comment';
        return false;
    }
    return true;
}

function addMessage()
{
    $message = $_POST;
    $message['message'] = strip_tags($message['message'], '<b>');
    array_unshift($message, date('YmdHis'));
    return file_put_contents('messages.txt', json_encode(serialize($message)) . PHP_EOL, FILE_APPEND);
}

$allMessages = [];
$msg = requestGet('msg');
if ($_POST) {
    if (formIsValid()) {        
        $res = addMessage();
        if ($res !== false) {
            $msg = 'Message saved';
        }
    }
}

$serializedMessages = file('messages.txt');
$allMessages = [];

foreach ($serializedMessages as $s) {
    $arr = unserialize(json_decode($s));
    $arr[0] = date_format(date_create_from_format('YmdHis', $arr[0]), 'Y-m-d H:i:s');
    $allMessages[] = implode(';  ', $arr);
}

require 'layout_08.phtml';