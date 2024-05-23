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
    $doctorId = isset($data['id']) ? $data['id'] : null;

    if (!$doctorId){
        throw new Exception("Doctor IS is missing");
    }

    $conversations = Doctor::getConversationsByDoctorId($doctorId);
    $conversationInfo = [];
    foreach($conversations as $conversation){
        $clientId = $conversation['Client_clientID'];
        $client = Client::findById($clientId);
        $clientName = $client['name'];
        $conversationId = $conversation['clientDoctoraConversationId'];
        $doctorMessages = Doctor::getDoctorMessagesById($conversationId);
        $clientMessages = Doctor::getClientMessagesById($conversationId);
        $conversation['clientName'] = $clientName;
        $conversation['clientMessages'] = $clientMessages;
        $conversation['doctorMessages'] = $doctorMessages;
        $conversationInfo[] = $conversation;

    }
    $responseData =[
        'conversationInfo' => $conversationInfo,
    ];

    header('Content-Type: application/json');
    echo json_encode($responseData);
    
} catch (Exception $e ){
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}