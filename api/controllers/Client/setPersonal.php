<?php

namespace App\Controllers;

use App\Models\Client;
use App\Models\ClientInfo;
use Core\App;
use Core\Database;
use PDOException;

// Resolve the database connection
$conn = App::resolve(Database::class);

// Get user data from request body
$user = file_get_contents('php://input');
$data = json_decode($user, true);

try {
    // Extract data from request
    $fullName = isset($data['fullName']) ? trim($data['fullName']) : '';
    $gender = isset($data['gender']) ? trim($data['gender']) : '';
    $dateOfBirth = isset($data['dateOfBirth']) ? trim($data['dateOfBirth']) : '';
    $placeOfBirth = isset($data['placeOfBirth']) ? trim($data['placeOfBirth']) : '';
    $height = isset($data['height']) ? trim($data['height']) : '';
    $weight = isset($data['weight']) ? trim($data['weight']) : '';

    // Retrieve client ID 
    $clientId = Client::getLatestClientId();

    // Delete existing ClientInfo for the client
    ClientInfo::deleteByClientId($clientId);

    // Convert gender to numeric value
    $gender = ($gender == 'Male') ? 0 : 1;

    // Create new ClientInfo record
    ClientInfo::create($clientId, $fullName, $gender, $dateOfBirth, $placeOfBirth, $height, $weight);

    echo "Saved correctly";
    http_response_code(200);
} catch (PDOException $e) {
    // Handle database errors
    http_response_code(500);
    echo json_encode(['error' => 'Database Error: ' . $e->getMessage()]);
}
