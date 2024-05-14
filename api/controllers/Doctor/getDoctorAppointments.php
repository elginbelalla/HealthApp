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
    $doctorId = isset($data['doctorId']) ? $data['doctorId'] : null ;
    $appointments = Doctor::findAppointmensByDoctorId($doctorId);

    $appointmentsWithClientName = [];
    foreach ($appointments as $appointment) {
        $clientId = $appointment['clientId'];
        $clientName = Client::findById($clientId)['name'];
        $appointment['clientName'] = $clientName;
        $appointmentsWithClientName[] = $appointment;
    }

    if ($appointments) {
        echo json_encode($appointmentsWithClientName);
        http_response_code(200);
    } else {
        echo json_encode(array("message" => "Appointments not found for the doctor"));
        http_response_code(404);
        exit();
    }

}catch(Exception $e){
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}