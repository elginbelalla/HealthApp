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
    $doctorName = Doctor::findById($doctorId)['name'];
    $weeklyAppointments = [
        'Monday' => 0,
        'Tuesday' => 0,
        'Wednesday' => 0,
        'Thursday' => 0,
        'Friday' => 0,
        'Saturday' => 0,
        'Sunday' => 0,
    ];
    $uniquePatientsPerDay = [];

    $startOfWeek = (new \DateTime())->setISODate((new \DateTime())->format('o'), (new \DateTime())->format('W'), 1)->format('Y-m-d');
    $endOfWeek = (new \DateTime())->setISODate((new \DateTime())->format('o'), (new \DateTime())->format('W'), 7)->format('Y-m-d');

    foreach ($doctorAppointments as $appointment) {
        $appointmentDate = new \DateTime($appointment['dateOfAppointment']);
        $dayOfWeek = $appointmentDate->format('l');
        $appointmentDate = $appointmentDate->format('Y-m-d');
        $clientId = $appointment['clientId'];

        $weeklyAppointments[$dayOfWeek]++;

        if ($appointmentDate >= $startOfWeek && $appointmentDate <= $endOfWeek) {
                if (!isset($uniquePatientsPerDay[$dayOfWeek][$clientId])) {
                $uniquePatientsPerDay[$dayOfWeek][$clientId] = true;
            }
        }
    }


    $uniquePatientCountPerDay = [
    'Monday' => 0,
    'Tuesday' => 0,
    'Wednesday' => 0,
    'Thursday' => 0,
    'Friday' => 0,
    'Saturday' => 0,
    'Sunday' => 0,
    ];

    foreach ($uniquePatientsPerDay as $day => $patients) {
        $uniquePatientCountPerDay[$day] = count($patients);
    }
    
    foreach ($doctorAppointments as $appointment) {
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
        'weeklyAppointments' => $weeklyAppointments,
        'uniquePatientsPerDay' => $uniquePatientCountPerDay,
        'doctorName' => $doctorName,
    ];
    
    header('Content-Type: application/json');
    echo json_encode($responseData);
    
} catch(Exception $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}
