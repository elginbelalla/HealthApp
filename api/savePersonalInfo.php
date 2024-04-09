<?php
session_start();

error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Access-Control-Allow-Origin: *"); // Allows all origins
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); // Allows specific HTTP methods
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');

include "DbConnect.php";
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $data = json_decode($user, true);
        $firstName = isset($data['firstName']) ? trim($data['firstName']) : '';
        $lastName = isset($data['lastName']) ? trim($data['lastName']) : '';
        $dateOfBirth = isset($data['dateOfBirth']) ? trim($data['dateOfBirth']) : '';
        $placeOfBirth = isset($data['placeOfBirth']) ? trim($data['placeOfBirth']) : '';
        $height = isset($data['height']) ? trim($data['height']) : '';
        $weight = isset($data['weight']) ? trim($data['weight']) : '';
    
        $sql = "INSERT INTO Client (firstName, lastName, dateOfBirth, placeOfBirth, height, weight) VALUES (:firstName, :lastName, :dateOfBirth, :placeOfBirth, :height, :weight)";

        $stmt = $conn->prepare($sql);

        $stmt->bindValue(':firstName', $firstName);
        $stmt->bindValue(':lastName', $lastName);
        $stmt->bindValue(':dateOfBirth', $dateOfBirth);
        $stmt->bindValue(':placeOfBirth', $placeOfBirth);
        $stmt->bindValue(':height', $height);
        $stmt->bindValue(':weight', $weight);
        
        if($stmt -> execute()){
            $last_id = $conn->lastInsertId();
            $_SESSION['last_inserted_id'] = $last_id;

            echo $last_id;
            http_response_code(200);
        }else{
            http_response_code(500);
        }
        break;

    case "GET":
        // 
        break;

    case "PUT":
        // 
        break;
}
