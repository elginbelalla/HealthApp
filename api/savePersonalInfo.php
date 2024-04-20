<?php
session_start();

error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Access-Control-Allow-Origin: *"); 
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
        $dateOfBirth = isset($data['dateB']) ? trim($data['dateB']) : ''; // Corrected field name
        $placeOfBirth = isset($data['placeB']) ? trim($data['placeB']) : ''; // Corrected field name
        $height = isset($data['height']) ? trim($data['height']) : '';
        $weight = isset($data['weight']) ? trim($data['weight']) : '';
    

        $sql = "SELECT clientID FROM Client ORDER BY clientID DESC LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $clientId = $result['clientID'];

        $sql = "INSERT INTO ClientInfo (clientId, firstName, lastName, dateOfBirth, placeOfBirth, height, weight) 
                VALUES (:clientId, :firstName, :lastName, :dateOfBirth, :placeOfBirth, :height, :weight)";

        $stmt = $conn->prepare($sql);

        $stmt->bindValue(':clientId', $clientId);
        $stmt->bindValue(':firstName', $firstName);
        $stmt->bindValue(':lastName', $lastName);
        $stmt->bindValue(':dateOfBirth', $dateOfBirth);
        $stmt->bindValue(':placeOfBirth', $placeOfBirth);
        $stmt->bindValue(':height', $height);
        $stmt->bindValue(':weight', $weight);
        
        if($stmt->execute()){
            http_response_code(200);
        } else {
            http_response_code(500); 
        }
        break;

    case "GET":
        
        break;

    case "PUT":
        // 
        break;
}
