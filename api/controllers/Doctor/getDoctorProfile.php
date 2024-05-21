<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use PDOException;
use App\Models\Doctor;
use Exception;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');

$data = json_decode($user, true);

try {
    $doctorId = isset($data['id']) ? $data['id'] : null;

    if (!$doctorId) {
        throw new Exception("Doctor ID is missing");
    }

    $doctorData = Doctor::findById($doctorId);
if ($doctorData) {
    $name = $doctorData['name'];
    $specialty = $doctorData['specialty'];
    $email = $doctorData['email'];
    $phoneNumber = $doctorData['phoneNo'];
    $clinicId = $doctorData['clinicid'] ?? '';
    $address = $doctorData['address'] ?? '';
    $profileInfo = $doctorData['profileInfo'] ?? '';
    if ($clinicId !== ''){
    $clinicName = Doctor::findClinicById($clinicId)['clinicName'];
    }
    else{
        $clinicName = '';
    }

    $responseData = [
        'name' => $name,
        'specialty' => $specialty,
        'email' => $email,
        'phoneNumber' => $phoneNumber,
        'clinicName' => $clinicName,
        'address' => $address,
        'profileInfo' => $profileInfo,
    ];

    header('Content-Type: application/json');
    echo json_encode($responseData);
    }
} catch(Exception $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}
