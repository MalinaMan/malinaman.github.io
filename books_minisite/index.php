<?php
error_reporting(E_ALL);

require 'functions.php';
session_start();

// if no controller param given - return books
$controller = requestGet('controller', 'books'); // $_GET['controller']

// todo: validate $controller value

$controllerFile = "{$controller}.php";

if (!file_exists($controllerFile)) {
    $controllerFile = 'books.php';
}

require $controllerFile;
require 'layout.phtml';