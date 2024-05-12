<?php

namespace App\Controllers;

use App\Models\Client;
use App\Models\Doctor;
use Core\App;
use Core\Database;
use PDOException;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');

try {
    $data = json_decode($user, true);
    $name = isset($data['name']) ? trim($data['name']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $password = isset($data['password']) ? trim($data['password']) : '';
    $phoneNumber = isset($data['phoneNumber']) ? trim($data['phoneNumber']) : '';
    $role = isset($data['role']) ? $data['role'] : '';

    switch ($role) {
        case "User":
            $clientId = Client::create($name, $email, $phoneNumber, $password);
            http_response_code(200);
            header("Content-Type: application/json");
            header("client-id: $clientId");
            echo json_encode(['clientId' => $clientId, 'message' => 'User created successfully']);
            break;
        case "Doctor":
            $lastName = isset($data['lastName']) ? trim($data['lastName']) : '';
            $specialization = isset($data['specialization']) ? trim($data['specialization']) : '';
            $doctorId = Doctor::createDoctor($name, $lastName, $email, $phoneNumber, $password, $specialization);
            header("Content-Type: application/json");
            header("doctor-id: $doctorId");
            echo json_encode(['doctorId' => $doctorId, 'role' => 'doctor', 'message' => 'User created successfully']);
            http_response_code(200);
            break;
        case "Clinic":
            $sql = "INSERT INTO Clinic (firstName, email, password, phoneNo) VALUES (:name, :email, :password, :phoneNo)";
            $conn->query($sql, [
                ':name' => $name,
                ':email' => $email,
                ':password' => $password,
                ':phoneNo' => $phoneNumber
            ]);
            http_response_code(200);
            break;
        default:
            http_response_code(400);
            echo json_encode(['error' => 'Invalid role provided']);
            break;
    }
} catch (PDOException $e) {
    // Handle database errors
    http_response_code(500);
    echo json_encode(['error' => 'Database Error: ' . $e->getMessage()]);
}
