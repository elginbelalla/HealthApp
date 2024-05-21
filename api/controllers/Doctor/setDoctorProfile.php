<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use App\Models\Doctor;
use Exception;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');
$data = json_decode($user, true);

try {
    if (!isset($data['doctorId']) || !isset($data['editableProfile'])) {
        throw new Exception("Invalid input data");
    }

    $doctorId = $data['doctorId'];
    $profile = $data['editableProfile'];

    $doctorData = Doctor::findById($doctorId);

    if (!$doctorData) {
        throw new Exception("Doctor not found");
    }

    $name = $profile['name'];
    $specialty = $profile['specialty'];
    $email = $profile['email'];
    $phoneNumber = $profile['phoneNumber'];
    $address = $profile['address'] ?? $doctorData['address'];
    $profileInfo = $profile['profileInformation'];

    
    if (isset($profile['clinic']) && $profile['clinic'] !== '') {
        $clinicId = $profile['clinic'];
    } else {
        $clinicId = $doctorData['clinicid']; 
    }

    Doctor::update(
        $doctorId,
        $name,
        $doctorData['lastName'], 
        $email,
        $clinicId,
        $specialty,
        $phoneNumber,
        $address,
        $profileInfo,
        $doctorData['password'], 
        $doctorData['document'], 
        $doctorData['startTime'], 
        $doctorData['endTime']
    );

    echo json_encode(array("message" => "Record updated successfully", "previousData" => $doctorData));
    http_response_code(200);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
