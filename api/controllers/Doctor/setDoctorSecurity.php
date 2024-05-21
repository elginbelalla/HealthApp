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
    if (!isset($data['doctorId']) || !isset($data['currentPassword']) || !isset($data['newPassword'])) {
        throw new Exception("Invalid input data");
    }

    $doctorId = $data['doctorId'];
    $currentPassword = $data['currentPassword'];
    $newPassword = $data['newPassword'];

    $doctorData = Doctor::findById($doctorId);

    if (!$doctorData) {
        throw new Exception("Doctor not found");
    }

    if (!password_verify($currentPassword, $doctorData['password'])) {
        throw new Exception("Current password is incorrect");
    }

    $hashedNewPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    Doctor::update(
        $doctorId,
        $doctorData['name'],
        $doctorData['lastName'],
        $doctorData['email'],
        $doctorData['clinicid'],
        $doctorData['specialty'],
        $doctorData['phoneNo'],
        $doctorData['address'],
        $doctorData['profileInfo'],
        $hashedNewPassword,
        $doctorData['document'],
        $doctorData['startTime'], 
        $doctorData['endTime']
    );


    echo json_encode(["message" => "Password updated successfully"]);
    http_response_code(200);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
