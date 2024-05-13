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

    $patients = Doctor::getPatientsByDoctorId($doctorId);

    $patientsWithClientNames = [];
    foreach ($patients as $patient) {
        $clientId = $patient['clientId'];
        $clientName = Client::findById($clientId)['name'];
        $clientBirth = Client::getClientBirthById($clientId)['dateOfBirth'];
        $clientDiagnosis = Client::getClientsDoctorNotesById($clientId)['diagnosis'];
   
        $patient['clientName'] = $clientName;
        $patient['dateOfBirth'] = $clientBirth;
        $patient['diagnosis'] = $clientDiagnosis;
        $patientsWithClientNames[] = $patient;
    }

    echo json_encode($patientsWithClientNames);

} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
