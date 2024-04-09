<?php

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
        $prevHealhConc = isset($data['prevHealhConc']) ? trim($data['prevHealhConc']) : '';
        $prevMed = isset($data['prevMed']) ? trim($data['prevMed']) : '';
        $notes = isset($data['notes']) ? trim($data['notes']) : '';
    
        $sql = "SELECT clientID FROM Client ORDER BY clientID DESC LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $clientId = $result['clientID'];

        echo($clientId);
        $sql = "INSERT INTO PersonalHealth (clientId, healthConcerns, previousMedication, notes) VALUES (:clientId, :healthConcerns, :previousMedication, :notes)";

        $stmt = $conn->prepare($sql);

        $stmt->bindValue(':clientId', $clientId);
        $stmt->bindValue(':healthConcerns', $prevHealhConc);
        $stmt->bindValue(':previousMedication', $prevMed);
        $stmt->bindValue(':notes', $notes);
        
        if($stmt -> execute()){
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
