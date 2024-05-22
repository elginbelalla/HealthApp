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

    $ratings = Doctor::getRatingsByDoctorId($doctorId);
    $totalNumOfAppointments = Doctor::findAppointmensCountByDoctorId($doctorId);
    $appointments = Doctor::findAllAppointmensByDoctorId($doctorId);
    $reviews = Doctor::getDoctorReviewsByDoctorId($doctorId);

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

    $uniquePatients = [];
    $numOfUniquePatients = 0;

    foreach ($appointments as $appointment){
        $patientId = $appointment['clientId'];
        if (!isset($uniquePatients[$patientId])){
            $uniquePatients[$patientId] = true;
            $numOfUniquePatients++; 
        }
    }
    
    $fullReviewInfo = [];
    foreach ($reviews as $review) {
            $clientId = $review['clientId'];
            $client = Client::findById($clientId);
            
            $clientName = $client['name'];
            $review['clientName'] = $clientName;
            $fullReviewInfo[] = $review;
            
    }

    $responseData = [
        'ratings' => $ratingCounts,
        'patients' => $numOfUniquePatients,
        'appointmentCount' => $totalNumOfAppointments,
        'reviews' => $fullReviewInfo,
    ];
    
    header('Content-Type: application/json');
    echo json_encode($responseData);
    
} catch(Exception $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}
