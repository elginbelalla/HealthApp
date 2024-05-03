<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use PDO;
use PDOException;
use App\Models\Client;

$conn = App::resolve(Database::class);

try {

    // Fetch the latest client ID
    $clientId = Client::getLatestClientId();

    if ($clientId) {
        $result = Client::findById($clientId);

        // Return JSON response
        header("Content-Type: application/json");
        header("client-id: $clientId");
        echo json_encode(['data' => $result, 'message' => 'Info retrieved successfully']);
    } else {
        // No client ID found
        echo json_encode([]);
    }
} catch (PDOException $e) {
    // Handle database errors
    http_response_code(500);
    echo json_encode(['error' => 'Database Error: ' . $e->getMessage()]);
}
