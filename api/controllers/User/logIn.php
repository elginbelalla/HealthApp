<?php

namespace App\Controllers;

use App\Models\Client;
use App\Models\Doctor;
use App\Models\Clinic;
use Core\App;
use Core\Database;
use PDOException;

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');

try {

    $data = json_decode($user, true);
    $email = isset($data['email']) ? trim($data['email']) : '';
    $password = isset($data['password']) ? trim($data['password']) : '';

    $response = array();

    // Find user by email for Client
    $client = Client::findByEmail($email);

    if ($client) {
        // Verify password for Client
        if (password_verify($password, $client['password'])) {
            // Password is correct, login successful for Client
            $response['success'] = true;
            $response['message'] = 'Client login successful';

            $response['role'] = 'client';
        } else {
            // Incorrect password for Client
            $response['success'] = false;
            $response['message'] = 'Incorrect password for Client';
        }
    } else {
        // User not found as Client, try finding as Doctor
        $doctor = Doctor::findByEmail($email);
        if ($doctor) {
            // Verify password for Doctor
            if (password_verify($password, $doctor['password'])) {
                // Password is correct, login successful for Doctor
                $response['success'] = true;
                $response['message'] = 'Doctor login successful';

                $response['role'] = 'doctor';
                $response['id'] = $doctor['doctorId'];
            } else {
                // Incorrect password for Doctor
                $response['success'] = false;
                $response['message'] = 'Incorrect password for Doctor';
            }
        } else {
            // User not found as Doctor, try finding as Clinic
            $clinic = Clinic::findByEmail($email);

            if ($clinic) {
                // Verify password for Clinic
                if (password_verify($password, $clinic['clinicPassword'])) {
                    // Password is correct, login successful for Clinic
                    $response['success'] = true;
                    $response['message'] = 'Clinic login successful';

                    $response['role'] = 'clinic';
                } else {
                    // Incorrect password for Clinic
                    $response['success'] = false;
                    $response['message'] = 'Incorrect password for Clinic';
                }
            } else {
                // User not found as Clinic, return appropriate message
                $response['success'] = false;
                $response['message'] = 'User not found';
            }
        }
    }

    // Send JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
} catch (PDOException $e) {
    // Handle database errors
    http_response_code(500);
    echo json_encode(['error' => 'Database Error: ' . $e->getMessage()]);
}
