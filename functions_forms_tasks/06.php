<?php

require 'functions.php';
$foldernameGallery = 'gallery';

function formIsValid()
{
    $folder = trim(requestPost('folderLocation'));
    $needle = trim(requestPost('needle'));
    return !(empty($folder)) && is_dir($folder) && !(empty($needle)) ;
}

function checkAndCreateDirectory($foldername) {
    if (!is_dir($foldername)) {
        mkdir($foldername);
    }
}

function uploadAttempt($attachment)
{
    global $foldernameGallery;
    $allowedTypes = true;
    
    foreach ($attachment['type'] as $fileType) {
        if (substr($fileType, 0, 5) !== 'image') {
            $allowedTypes = false;
        }
    }
    
    if (!$allowedTypes) {
        return false;
    }
    
    checkAndCreateDirectory($foldernameGallery);

    $filesArr = [];
    for ($i = 0; $i < count($attachment['name']); $i++) {
        $filename = $attachment['name'][$i];
        $uploadRes = move_uploaded_file($attachment['tmp_name'][$i], $foldernameGallery . "/{$filename}");
        if ($uploadRes === false) {
            return false;
        }
        $filesArr[] = $filename;
    }
    
    return $filesArr;
}


$filesArr = [];
$msg = requestGet('msg');
if ($_FILES) {
    $attachment = $_FILES['photoFiles'];
    if (!array_sum($attachment['error'])) {
        $uploadRes = uploadAttempt($attachment);
        if ($uploadRes === false) {
            $msg = 'Error upload files to gallery';
        } else {
            $msg = 'Photos upload to gallery successfully';
        }
    } else {
        $msg = 'form was submitted - invalid';
    }
}

$filesArr = array_diff(scandir($foldernameGallery), array('..', '.'));

require 'layout_06.phtml';