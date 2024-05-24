<?php

// Your Calendly API key
$api_key = "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzE2NDkxODAzLCJqdGkiOiI2OTk1Nzk2NS03ZjU2LTQzNDAtODIwMi1mMTBmYWEzOThiNGMiLCJ1c2VyX3V1aWQiOiIyMmQ3YjcyNC1mNDFhLTQ2MmUtOTg2MC0xYzI0NGU5MmJkNzIifQ.57UOslZIfJRK24tlDOEVRgDL9AUopNjYRtFXHP-MO7rsfHOYLLhwpb-2h4V4IuBNShvbtbQE8Min6szemsVyHg";

// Set the headers
$headers = [
    "Authorization: APIKey $api_key",
    "Content-Type: application/json"
];

// Base URL for the Calendly API
$base_url = "https://api.calendly.com";

// Endpoint for event types
$event_types_endpoint = "/event_types";

// Initialize cURL to get event types
$ch = curl_init();

// Set cURL options for event types
curl_setopt($ch, CURLOPT_URL, $base_url . $event_types_endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Execute the request to get event types
$event_types_response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'Request Error:' . curl_error($ch);
    exit();
}

// Decode the JSON response for event types
$event_types_data = json_decode($event_types_response, true);

// Check if 'collection' key is present
if (isset($event_types_data['collection'])) {
    // Output event types
    echo "Event Types:\n";
    foreach ($event_types_data['collection'] as $event_type) {
        echo "Name: " . $event_type['name'] . "\n";
        echo "Slug: " . $event_type['slug'] . "\n";
        echo "Description: " . $event_type['description'] . "\n\n";
    }
} else {
    echo "Failed to retrieve event types. Response:\n";
    var_dump($event_types_data);
}

// Close cURL session for event types
curl_close($ch);

// Endpoint for scheduled events
$scheduled_events_endpoint = "/scheduled_events";

// Initialize cURL to get scheduled events
$ch = curl_init();

// Set cURL options for scheduled events
curl_setopt($ch, CURLOPT_URL, $base_url . $scheduled_events_endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Execute the request to get scheduled events
$scheduled_events_response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'Request Error:' . curl_error($ch);
    exit();
}

// Decode the JSON response for scheduled events
$scheduled_events_data = json_decode($scheduled_events_response, true);

// Check if 'collection' key is present
if (isset($scheduled_events_data['collection'])) {
    // Output scheduled events
    echo "Scheduled Events:\n";
    foreach ($scheduled_events_data['collection'] as $scheduled_event) {
        echo "Event Name: " . $scheduled_event['name'] . "\n";
        echo "Start Time: " . $scheduled_event['start_time'] . "\n";
        echo "End Time: " . $scheduled_event['end_time'] . "\n\n";
    }
} else {
    echo "Failed to retrieve scheduled events. Response:\n";
    var_dump($scheduled_events_data);
}

// Close cURL session for scheduled events
curl_close($ch);
