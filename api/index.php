<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include "DbConnect.php";
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        //
        break;

    case "GET":
        // 
        break;

    case "PUT":
        // 
        break;
}
