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

try{
    $doctorId = isset($data['id']) ? $data['id'] : null;

    $appointments = Doctor::findAppointmensByDoctorId($doctorId);

    $patientsWithClientInfo = [];
    $uniquePatientIds = [];

    foreach ($appointments as $appointment) {
        $clientId = $appointment['clientId'];
        if (!in_array($clientId, $uniquePatientIds)) {
            $uniquePatientIds[] = $clientId; 
            $clientName = Client::findById($clientId)['name'];
            $clientBirth = Client::getClientBirthById($clientId)['dateOfBirth'];
            $clientDiagnosis = Client::getClientsDoctorNotesById($clientId)['diagnosis'];
    
            // Add the patient info to the list
            $patientsWithClientInfo[] = [
                'clientId' => $clientId,
                'clientName' => $clientName,
                'dateOfBirth' => $clientBirth,
                'diagnosis' => $clientDiagnosis
            ];
        }
    }

    echo json_encode($patientsWithClientInfo);

} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
