<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use PDOException;
use App\Models\Doctor;
use PDO;
use Exception;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');

$data = json_decode($user, true);

try {
    $id = isset($_POST['userId']) ? $_POST['userId'] : null;
    $userType = isset($_POST['userType']) ? $_POST['userType'] : null;
    
    if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(array("message" => "No file uploaded"));
        http_response_code(400);
        exit();
    }
    
    $file = $_FILES['file'];
    $fileContents = file_get_contents($file['tmp_name']);
    
    try {
        if($userType == "Doctor"){
            $doctorData = Doctor::findById($id);
            
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
                $startTime = NULL;
                $endTime = NULL;

                $success = Doctor::update($id, $name, $lastName, $email, $clinicid, $specialty, $phoneNo, $address, $profileInfo, $password, $fileContents, $startTime, $endTime);

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
        }else if($userType == "Clinic"){
            $selectStmt = $conn->prepare("SELECT * FROM clinic WHERE clinicId = :id");
            $selectStmt->bindParam(':id', $id);
            $selectStmt->execute();
            $row = $selectStmt->fetch(PDO::FETCH_ASSOC);
            $clinicName = $row['clinicName'];
            $clinicAddress = $row['clinicAddress'];
            $clinicPhoneNo = $row['clinicPhoneNo'];
            $clinicInfo = $row['clinicInfo'];
            $clinicPassword = $row['clinicPassword'];
            $clinicLogo = $row ['clinicLogo'];
        }else{
            echo json_encode(array("message" => "Invalid userType"));
        }

    } catch (PDOException $e) {
        echo json_encode(array("message" => "Error: " . $e->getMessage()));
    }
} catch (Exception $e) {
    echo json_encode(array("message" => "Error: " . $e->getMessage()));
}