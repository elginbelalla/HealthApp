<?php

namespace App\Controllers;

use App\Models\Client;
use App\Models\ClientInfo;
use Core\App;
use Core\Database;
use PDO;
use PDOException;

$conn = App::resolve(Database::class);
$user = file_get_contents('php://input');

$data = json_decode($user, true);
print_r($data);

try {

    $doctorId = isset($data['doctorId']) ? trim($data['doctorId']) : '';
    $clientId = Client::getLatestClientId();

    Client::setDoctorAppointment($clientId, $doctorId);

    http_response_code(200);
} catch (PDOException $e) {
    // Handle database errors
    http_response_code(500);
    echo json_encode(['error' => 'Database Error: ' . $e->getMessage()]);
}
