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
    $startTime = isset($data['workingHours']['startTime']['startTime']) ? strtotime($data['workingHours']['startTime']['startTime']) : null;
    $endTime = isset($data['workingHours']['startTime']['endTime']) ? strtotime($data['workingHours']['startTime']['endTime']) : null;
    
    $startTimeString = isset($data['workingHours']['startTime']['startTime']) ? $data['workingHours']['startTime']['startTime'] : null;
    $endTimeString = isset($data['workingHours']['startTime']['endTime']) ? $data['workingHours']['startTime']['endTime'] : null;

    $doctorData = Doctor::findById($doctorId);

    if ($doctorData) {

        $name = $doctorData['name'];
        $lastName = $doctorData['lastName'];
        $email = $doctorData['email'];
        $clinicid = $doctorData['clinicid'];
        $specialty = $doctorData['specialty'];
        $phoneNo = $doctorData['phoneNo'];
        $address = $doctorData['address'];
        $profileInfo = $doctorData['profileInfo'];
        $password = $doctorData['password'];
        $document = $doctorData['document'];

        $success = Doctor::update($doctorId, $name, $lastName, $email, $clinicid, $specialty, $phoneNo, $address, $profileInfo, $password, $document, $startTimeString, $endTimeString);


        if ($success) {
            echo json_encode(array("message" => "Record updated successfully", "previousData" => $doctorData));
            http_response_code(200);
        } else {
            echo json_encode(array("message" => "Failed to update record"));
            http_response_code(500);
        }                

    } else {
        echo json_encode(array("message" => "Doctor not found"));
        http_response_code(404);
        exit();
    } 
}catch(Exception $e){
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}