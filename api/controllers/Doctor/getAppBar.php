<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use PDOException;
use App\Models\Doctor;
use App\Models\Client;
use Exception;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');

$data = json_decode($user, true);

try {
    $doctorId = isset($data['id']) ? $data['id'] : null;

    if (!$doctorId) {
        throw new Exception("Doctor ID is missing");
    }

    $labRequests = Doctor::getTestResultsWithNullDocumentCountByDoctorId($doctorId);
    
    $doctorName = Doctor::findById($doctorId)['name'];
    

    $responseData = [
        'doctorName' => $doctorName,
        'labRequestsCount' => $labRequests,
    ];
    
    header('Content-Type: application/json');
    echo json_encode($responseData);
    
} catch(Exception $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}
