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
function formIsValid()
{
	$username = requestPost('username');
	$email = requestPost('email');
	$message = requestPost('message');

	// logic for form data check
	return !empty($username) && !empty($email) && !empty($message);
}