<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use App\Models\Doctor;
use Exception;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');

$data = json_decode($user, true);

try{
    $doctorId = isset($data['doctorId']) ? $data['doctorId'] : null ;
    $workingHours = Doctor::getWorkingHoursByDoctorId($doctorId);

    if ($workingHours){
        echo json_encode($workingHours);
        http_response_code(200);
    } else {
        echo json_encode(array("message" => "Working hours not found"));
        http_response_code(404);
        exit();
    } 
}catch(Exception $e){
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}