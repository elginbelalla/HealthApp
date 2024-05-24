<?php

namespace App\Controllers;

use Core\App;
use Core\Database;
use PDOException;
use App\Models\Doctor;
use App\Models\Client;
use PDO;
use Exception;
use DateTime; // Import DateTime class

$conn = App::resolve(Database::class);

$user = file_get_contents('php://input');
$data = json_decode($user, true);

try {
    foreach ($data as $messageData) {
        $clientDoctorConversationId = isset($messageData['clientDoctorConversationId']) ? $messageData['clientDoctorConversationId'] : null;
        if (!$clientDoctorConversationId) {
            throw new Exception("Conversation not found");
        }

        $sender = isset($messageData['sender']) ? $messageData['sender'] : null;
        $timestamp = isset($messageData['timestamp']) ? $messageData['timestamp'] : null;

        if ($timestamp) {
            $timestamp = $timestamp / 1000;
            $dateTime = (new DateTime())->setTimestamp($timestamp);
            $formattedTimestamp = $dateTime->format('Y-m-d H:i:s');
        } else {
            $formattedTimestamp = null;
        }
    
        if (isset($messageData['message'])) {
            $message = $messageData['message'];

            $stmt = $conn->prepare("INSERT INTO clientdoctormessages (clientDoctorConversationId, sender, text, timestamp) VALUES (:conversationId, :sender, :message, :timestamp)");
            $stmt->bindParam(':conversationId', $clientDoctorConversationId);
            $stmt->bindParam(':sender', $sender);
            $stmt->bindParam(':message', $message);
            $stmt->bindParam(':timestamp', $formattedTimestamp);
            $stmt->execute();
        } elseif (isset($messageData['document'])) {
            $document = $messageData['document'];

            $stmt = $conn->prepare("INSERT INTO clientdoctormessages (clientDoctorConversationId, sender, document, timestamp) VALUES (:conversationId, :sender, :document, :timestamp)");
            $stmt->bindParam(':conversationId', $clientDoctorConversationId);
            $stmt->bindParam(':sender', $sender);
            $stmt->bindParam(':document', $document);
            $stmt->bindParam(':timestamp', $formattedTimestamp);
            $stmt->execute();
        }
    }

    echo json_encode(array("message" => "Message sent successfully")); 

} catch (Exception $e) {
    echo json_encode(array("message" => "Error: " . $e->getMessage())); 
}
