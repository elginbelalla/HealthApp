<?php
session_start();

error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Access-Control-Allow-Origin: *"); 
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); 
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');

include "DbConnect.php";
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $data = json_decode($user, true);
        $fullName = isset($data['fullName']) ? trim($data['fullName']) : '';
        $gender = isset($data['gender']) ? trim($data['gender']) : '';
        $dateOfBirth = isset($data['dateOfBirth']) ? trim($data['dateOfBirth']) : ''; 
        $placeB = isset($data['placeOfBirth']) ? trim($data['placeOfBirth']) : ''; 
        $height = isset($data['height']) ? trim($data['height']) : '';
        $weight = isset($data['weight']) ? trim($data['weight']) : '';
    

        $sql = "SELECT clientID FROM Client ORDER BY clientID DESC LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $clientId = $result['clientID'];

        $sqlDelete = "DELETE FROM ClientInfo WHERE clientId = :clientId";
        $stmtDelete = $conn->prepare($sqlDelete);
        $stmtDelete->bindValue(':clientId', $clientId);
        $stmtDelete->execute();

        $sql = "INSERT INTO ClientInfo (clientId, fullName, gender, dateOfBirth, placeOfBirth, height, weight) 
                VALUES (:clientId, :fullName, :gender, :dateOfBirth, :placeOfBirth, :height, :weight)";

        $stmt = $conn->prepare($sql);

        $stmt->bindValue(':clientId', $clientId);
        $stmt->bindValue(':fullName', $fullName);
        $stmt->bindValue(':gender', $gender);
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
        $sql = "SELECT clientID FROM Client ORDER BY clientID DESC LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $clientId = $result['clientID'];

        $sql = "SELECT * FROM ClientInfo WHERE clientId = :clientId";
        $stm = $conn->prepare($sql);
        $stm->bindValue(':clientId', $clientId);
        $stm->execute();
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        echo json_encode($result);
        break;

    case "PUT":
        // 
        break;
}
