<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use PDOException;
use App\Models\Doctor;
use App\Models\Client;
use PDO;
use Exception;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');

$data = json_decode($user, true);

try {
    $testId = isset($_POST['testId']) ? $_POST['testId'] : null;        

    if(isset($_FILES['file']['name']) && isset($_FILES['file']['tmp_name'])) {
        $fileName = $_FILES['file']['name'];
        $fileTempName = $_FILES['file']['tmp_name'];

        $fileData = file_get_contents($fileTempName);
        
        $arrivalDate = date('Y-m-d H:i:s');

        $result = Doctor::getTestResulsListsByTestId($testId);

        if($result !== false) {
            $clientId = $result['clientId'];
            $doctorId = $result['doctorId'];
            $clinicId = $result['clinicId'];
            $testType = $result['testType'];
            $requestDate = $result['requestDate'];

            $success = Doctor::uploadTestDocumentByTestId($testId, $clientId, $doctorId, $clinicId, $testType, $requestDate, $arrivalDate, $fileData);

            if ($success) {
                echo json_encode(array("message" => "Record updated successfully"));
                http_response_code(200);
            } else {
                echo json_encode(array("message" => "Failed to update record"));
                http_response_code(500);
            }
        } else {
            echo json_encode(array("message" => "Test result not found"));
            http_response_code(404);
        }     
    } else {
        echo json_encode(array("message" => "File data not found"));
        http_response_code(400);
    }           

} catch (Exception $e) {
    echo json_encode(array("message" => "Error: " . $e->getMessage())); 
}
