<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
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
        $prevHealhConc = isset($data['prevHistory']) ? trim($data['prevHistory']) : '';
        $prevMed = isset($data['prevMedication']) ? trim($data['prevMedication']) : '';
        $notes = isset($data['notes']) ? trim($data['notes']) : '';
    
        $sql = "SELECT clientID FROM Client ORDER BY clientID DESC LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $clientId = $result['clientID'];

        echo($clientId);

        $sqlDelete = "DELETE FROM FamilyHealth WHERE clientId = :clientId";
        $stmtDelete = $conn->prepare($sqlDelete);
        $stmtDelete->bindValue(':clientId', $clientId);
        $stmtDelete->execute();

        $sql = "INSERT INTO FamilyHealth (clientId, prevHistory, prevMedication, notes) VALUES (:clientId, :prevHistory, :prevMedication, :notes)";

        $stmt = $conn->prepare($sql);

        $stmt->bindValue(':clientId', $clientId);
        $stmt->bindValue(':prevHistory', $prevHealhConc);
        $stmt->bindValue(':prevMedication', $prevMed);
        $stmt->bindValue(':notes', $notes);
        
        if($stmt -> execute()){
            http_response_code(200);
        }else{
            http_response_code(500);
        }
        break;

    case "GET":
        $sql = "SELECT clientID FROM Client ORDER BY clientID DESC LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $clientId = $result['clientID'];

        $sql = "SELECT * FROM FamilyHealth WHERE clientId = :clientId";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':clientId', $clientId);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($result);
        break;

    case "PUT":
        // 
        break;
}
