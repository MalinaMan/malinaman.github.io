<?php

define('BOOKS_STORAGE', 'data/books.txt');

// list -> listAction
$action = requestGet('action', 'list') . 'Action';

if (!function_exists($action)) {
    set_Flash("Function {$action} does not exist", 'message');
    redirect('/books_minisite/index.php');
}

$content = $action();


function listAction()
{
    $books = loadBooks();
    
    ob_start();
    require 'books_list.phtml';
    return ob_get_clean();
}

function createAction()
{
    if ($_POST) {
        if (formIsValid()) {
            $book = $_POST;
            $book['id'] = rand(10000, 99999);
            $book = serialize($book);
            
            file_put_contents(BOOKS_STORAGE, $book . PHP_EOL, FILE_APPEND);
            
            set_Flash("The book was created successfully", 'message');
            redirect('/books_minisite/');
        }
        set_Flash("Form was submitted - invalid", 'message');
    } 
    
    ob_start();
    require 'books_create.phtml';
    return ob_get_clean();
}

function editAction()
{
    $id = requestGet('id');
    
    if (!$id) {
       set_Flash("Error getting 'ID' books", 'message');
       redirect('/books_minisite/');
    }
    
    $books = loadBooks();
    $bookFound = false;
    
    // & - to edit
    foreach ($books as &$book) {
        if ($id == $book['id']) {
            $bookFound = true;
            break;
        }
    }
    
    if (!$bookFound) {
        set_Flash("By this ID ({$id}) the book was not found", 'message');
        redirect('/books_minisite/');
    }
    
    if ($_POST) {
        $book['title'] = $_POST['title'];
        $book['price'] = $_POST['price'];
        
        fopen(BOOKS_STORAGE, 'w');
        fclose();
        
        foreach ($books as $b) {
            file_put_contents(BOOKS_STORAGE, serialize($b) . PHP_EOL, FILE_APPEND);
        }
        
        set_Flash("The book was edited successfully", 'message');
        redirect('/books_minisite/');
    }
    
    ob_start();
    require 'books_edit.phtml';
    return ob_get_clean();
}

function deleteAction()
{
    $id = requestGet('id');
    
    if (!$id) {
       set_Flash("Error getting 'ID' books", 'message');
       redirect('/books_minisite/');
    }
    
    $books = loadBooks();
    $bookFound = false;
    
    // & - to edit
    foreach ($books as $key => $book) {
        if ($id == $book['id']) {
            $bookFound = true;
            break;
        }
    }
    
    if (!$bookFound) {
        set_Flash("By this ID ({$id}) the book was not found", 'message');
        redirect('/books_minisite/');
    }
    
    unset($books[$key]);

    fopen(BOOKS_STORAGE, 'w');
    fclose();

    foreach ($books as $b) {
        file_put_contents(BOOKS_STORAGE, serialize($b) . PHP_EOL, FILE_APPEND);
    }
    
    set_Flash("The book was deleted successfully", 'message');
    redirect('/books_minisite/');
}

function loadBooks()
{
    $serializedBooks = file(BOOKS_STORAGE);
    $books = [];
    
    foreach ($serializedBooks as $b) {
        $books[] = unserialize($b);
    }
    
    return $books;
}