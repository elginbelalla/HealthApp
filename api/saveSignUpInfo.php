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
session_start();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $data = json_decode($user, true);
        $name = isset($data['name']) ? trim($data['name']) : '';
        $email = isset($data['email']) ? trim($data['email']) : '';
        $password = isset($data['password']) ? trim($data['password']) : '';
        $phoneNumber = isset($data['phoneNumber']) ? trim($data['phoneNumber']) : '';
        $role = isset($data['role']) ? $data['role'] : '';
        echo($role);

        $response = array();

        switch ($role) {
            case "User":
                $sql = "INSERT INTO Client (name, email, phoneNo, password) VALUES (:name, :email, :phoneNo, :password)";
                $stmt = $conn->prepare($sql);
                $stmt->bindValue(':name', $name);
                $stmt->bindValue(':email', $email);
                $stmt->bindValue(':password', $password);
                $stmt->bindValue(':phoneNo', $phoneNumber);
                $stmt->execute();
                $clientId = $conn->lastInsertId();
                $_SESSION['clientId'] = $clientId;
                echo($clientId);
                http_response_code(200);
                break;
            case "Doctor":
                $sql = "INSERT INTO Doctor (firstName, email, password, phoneNo) VALUES (:name, :email, :password, :phoneNo)";
                $stmt = $conn->prepare($sql);
                $stmt->bindValue(':name', $name);
                $stmt->bindValue(':email', $email);
                $stmt->bindValue(':password', $password);
                $stmt->bindValue(':phoneNo', $phoneNumber);
                $stmt->execute();
                http_response_code(200); 
                break;  
            case "Clinic":
                $sql = "INSERT INTO Clinic (firstName, email, password, phoneNo) VALUES (:name, :email, :password, :phoneNo)";
                $stmt = $conn->prepare($sql);
                $stmt->bindValue(':name', $name);
                $stmt->bindValue(':email', $email);
                $stmt->bindValue(':password', $password);
                $stmt->bindValue(':phoneNo', $phoneNumber);
                $stmt->execute();
                http_response_code(200);
                break;
            }
        break;

    case "GET":
        // 
        break;

    case "PUT":
        // 
        break;
}
