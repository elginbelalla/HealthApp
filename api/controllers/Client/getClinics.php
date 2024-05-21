<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use PDO;
use PDOException;
use App\Models\Client;

$conn = App::resolve(Database::class);

try {
    $clinics = Client::getAllClinics();

    // Return JSON response
    header("Content-Type: application/json");
    echo json_encode(['data' => $clinics, 'message' => 'Clinics retrieved successfully']);
} catch (PDOException $e) {
    // Handle database errors
    http_response_code(500);
    echo json_encode(['error' => 'Database Error: ' . $e->getMessage()]);
}
