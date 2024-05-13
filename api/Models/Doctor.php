<?php

namespace App\Models;

use Core\App;
use Core\Database;
use PDO;

class Doctor
{
    protected $doctorID;
    protected $name;
    protected $lastName;
    protected $email;
    protected $clinicID;
    protected $specialty;
    protected $phoneNo;
    protected $address;
    protected $profileInfo;
    protected $password;
    protected $conn;

    public function __construct($doctorID, $name, $lastName, $email, $clinicID, $specialty, $phoneNo, $address, $profileInfo, $password)
    {
        $this->doctorID = $doctorID;
        $this->name = $name;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->clinicID = $clinicID;
        $this->specialty = $specialty;
        $this->phoneNo = $phoneNo;
        $this->address = $address;
        $this->profileInfo = $profileInfo;
        $this->password = $password;

        $this->conn = App::resolve(Database::class);
    }
    
    public static function findByEmail($email)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM doctors WHERE email = :email LIMIT 1";
        $conn = $conn->query($sql, ['email' => $email]);
        return $conn->find(PDO::FETCH_ASSOC);
    }


    public static function createDoctor($name, $lastName, $email, $phoneNo, $password, $specialization)
    {
        $conn = App::resolve(Database::class);
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO doctors (name, lastName, email, phoneNo, password, specialty) VALUES (:name, :lastName, :email, :phoneNo, :password, :specialization)";
        $conn->query($sql, [
            ':name' => $name,
            ':lastName' => $lastName,
            ':email' => $email,
            ':phoneNo' => $phoneNo,
            ':password' => $hashedPassword,
            ':specialization' => $specialization
        ]);

        return $conn->connection->lastInsertId();
    }

    public static function findById($doctorId)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM doctors WHERE doctorId = :doctorId LIMIT 1";
        $stmt = $conn->query($sql, [':doctorId' => $doctorId]);
        return $stmt->find(PDO::FETCH_ASSOC);
    }

    public static function update($doctorId, $name, $lastName, $email, $clinicid, $specialty, $phoneNo, $address, $profileInfo, $password, $document)
{
    $conn = App::resolve(Database::class);
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $sql = "UPDATE doctors SET name = :name, lastName = :lastName, email = :email, clinicid = :clinicid, specialty = :specialty, phoneNo = :phoneNo, address = :address, profileInfo = :profileInfo, password = :password, document = :document WHERE doctorId = :doctorId";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':lastName', $lastName);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':clinicid', $clinicid);
    $stmt->bindParam(':specialty', $specialty);
    $stmt->bindParam(':phoneNo', $phoneNo);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':profileInfo', $profileInfo);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':document', $document, PDO::PARAM_LOB);
    $stmt->bindParam(':doctorId', $doctorId);
    
    return $stmt->execute();
}

public static function findAppointmensByDoctorId($doctorId){
    $conn = App::resolve(Database::class);
    $sql = "SELECT * FROM appointment WHERE doctorId = :doctorId ORDER BY dateOfAppointment DESC LIMIT 3";
    $stmt = $conn->prepare($sql);
    $stmt->execute([':doctorId' => $doctorId]);
    
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

public static function findTestsByDoctorId($doctorId){
    $conn = App::resolve(Database::class);
    $sql = "SELECT * FROM testresultlist WHERE doctorId = :doctorId ORDER BY requestDate DESC LIMIT 3";
    $stmt = $conn->prepare($sql);
    $stmt->execute([':doctorId' => $doctorId]);

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

public static function countDoctorAppointmentsForCurrentWeek($doctorId) {
    $weekStartDate =  date('Y-m-d', strtotime('last monday'));
    $weekEndDate = date('Y-m-d', strtotime('next sunday'));

    $conn = App::resolve(Database::class);
    $sql = "SELECT COUNT(*) AS appointmentCount 
            FROM appointment 
            WHERE doctorId = :doctorId 
            AND dateOfAppointment BETWEEN :weekStartDate AND :weekEndDate";
    $stmt = $conn->query($sql, [
        ':doctorId' => $doctorId,
        ':weekStartDate' => $weekStartDate,
        ':weekEndDate' => $weekEndDate
    ]);
    $row = $stmt->find(PDO::FETCH_ASSOC); 
    return $row['appointmentCount'];
}

public static function getRatingsByDoctorId($doctorId){
    $conn = App::resolve(Database::class);
    $sql = "SELECT * FROM doctorratings WHERE doctorId = :doctorId";

    $stmt = $conn->prepare($sql);
    $stmt->execute([':doctorId' => $doctorId]);
    
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

public static function calculateRatings($rating){
    $conn = App::resolve(Database::class);
    $sql = "SELECT COUNT(*) as count FROM doctorratings WHERE rating = :rating";

    $stmt = $conn->prepare($sql);
    $stmt->execute([':rating' => $rating]);

    return $stmt->fetch(PDO::FETCH_ASSOC)['count'];
}

public static function getPatientsByDoctorId ($doctorId){
    $conn = App::resolve(Database::class);
    $sql = 'SELECT * FROM patientslist WHERE doctorId = :doctorId';

    $stmt = $conn->prepare($sql);
    $stmt->execute([':doctorId' => $doctorId]);

    return $stmt->fetchAll(PDO::FETCH_ASSOC);

}
}
