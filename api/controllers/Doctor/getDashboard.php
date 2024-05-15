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

    $doctorAppointments = Doctor::findAppointmensByDoctorId($doctorId);
    $labRequests = Doctor::findTestsByDoctorId($doctorId);
    $appointmentCount = Doctor::countDoctorAppointmentsForCurrentWeek($doctorId);
    $ratings = Doctor::getRatingsByDoctorId($doctorId);

    foreach ($doctorAppointments as &$appointment) {
        $clientId = $appointment['clientId'];
        $clientNameApp = Client::findById($clientId)['name'];
        $appointment['clientNameApp'] = $clientNameApp;
    }

    foreach ($labRequests as &$requests) {
        $clientId = $requests['clientId'];
        $clientNameReq = Client::findById($clientId)['name'];
        $requests['clientNameReq'] = $clientNameReq;
    }

    $ratingCounts = [];
    if (!empty($ratings)) {
        for ($i = 1; $i <= 5; $i++) {
            $ratingCounts[$i] = Doctor::calculateRatings($i, $doctorId);        
        }
    } else {
        $ratingCounts = [
            1 => 0,
            2 => 0,
            3 => 0,
            4 => 0,
            5 => 0
        ];
    }

    $responseData = [
        'appointments' => $doctorAppointments,
        'labRequests' => $labRequests,
        'patientCountThisWeek' => $appointmentCount,
        'ratings' => $ratingCounts,
    ];
    
    header('Content-Type: application/json');
    echo json_encode($responseData);
    
} catch(Exception $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}
