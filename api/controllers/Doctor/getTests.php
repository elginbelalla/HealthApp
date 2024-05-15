<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use App\Models\Doctor;
use App\Models\Client;
use Exception;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');

$data = json_decode($user, true);

try{
    $doctorId = isset($data['doctorId']) ? $data['doctorId'] : null;  
    
    $testResults = Doctor::getTestResultsWithNullDocumentByDoctorId($doctorId);

    $testResultsInfo = [];

    foreach ($testResults as $testResult){
        $clientId = $testResult['clientId'];
        $clientName = Client::findById($clientId)['name'];
        $testResult['name'] = $clientName;

        $testResultsInfo[] = $testResult;
    }

    echo json_encode($testResultsInfo);

} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
