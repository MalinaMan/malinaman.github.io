<?php

error_reporting(E_ALL);
require 'functions.php';

session_start();
$words = ['beach', 'smuck', 'sheet'];
$msg = get_Flash('message');

if ($_POST) {
    if (formIsValid()) {
        
        $_POST['message'] = str_ireplace($words, '***', $_POST['message']);
        
        $feedback = $_POST;
        $feedback['datetime'] = date('YmdHis');
        $res = file_put_contents('messages.txt', json_encode(serialize($feedback)) . PHP_EOL, FILE_APPEND);
        
        // if ($res === false) {
        //     $msg = 'Error';
        //     redirect("/php_contact_form/index.php?msg={$msg}");
        // }

        set_Flash('Message saved', 'message');
        redirect("/php_contact_form/index.php");
    } 
    
    $msg = 'form was submitted - invalid';
}


$serializedFeedbacks = file('messages.txt');
$feedbacks = [];
foreach ($serializedFeedbacks as $s) {
    $feedbacks[] = unserialize(json_decode($s));
}

$sortField = requestGet('sort');
if ($sortField !== null) {
    $order = strtoupper(requestGet('order', 'DESC'));

    usort($feedbacks, function($a, $b) use ($sortField, $order) {
        if (!(array_key_exists($sortField, $a)) || !(array_key_exists($sortField, $b))) {
            return 0;
        }
        return (($order === 'DESC') ? -1 : 1) * strcmp($a[$sortField], $b[$sortField]);
    });
}

require 'layout.phtml';