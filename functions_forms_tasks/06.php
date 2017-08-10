<?php

require 'functions.php';

function formIsValid()
{
    $folder = trim(requestPost('folderLocation'));
    $needle = trim(requestPost('needle'));
    return !(empty($folder)) && is_dir($folder) && !(empty($needle)) ;
}

function uploadAttempt($attachment)
{
    $allowedTypes = true;
    
    foreach ($attachment['type'] as $fileType) {
        if (substr($fileType, 0, 5) !== 'image') {
            $allowedTypes = false;
        }
    }
    
    if (!$allowedTypes) {
        return false;
    }
    
    $filesArr = [];
    for ($i = 0; $i < count($attachment['name']); $i++) {
        $filename = $attachment['name'][$i];
        $uploadRes = move_uploaded_file($attachment['tmp_name'][$i], "gallery/{$filename}");
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
        $filesArr = uploadAttempt($attachment);
        if ($filesArr !== false) {
            $msg = 'Photos upload to gallery successfully';
        }
    } else {
        $msg = 'form was submitted - invalid';
    }
}

require 'layout_06.phtml';