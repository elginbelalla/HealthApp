<?php

namespace App\Models;

use Core\App;
use Core\Database;
use PDO;

class Client
{
    protected $clientID;
    protected $name;
    protected $email;
    protected $phoneNr;
    protected $password;
    protected $conn;


    public function __construct($clientID, $name, $email, $phoneNr, $password)
    {
        $this->clientID = $clientID;
        $this->name = $name;
        $this->email = $email;
        $this->phoneNr = $phoneNr;
        $this->password = $password;

        $this->conn = App::resolve(Database::class);
    }

    public static function create($name, $email, $phoneNo, $password)
    {
        $conn = App::resolve(Database::class);
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO client (name, email, phoneNo, password) VALUES (:name, :email, :phoneNo, :password)";
        $conn->query($sql, [
            ':name' => $name,
            ':email' => $email,
            ':phoneNo' => $phoneNo,
            ':password' => $hashedPassword
        ]);

        return $conn->connection->lastInsertId();
    }

    public static function update($clientID, $name, $email, $phoneNo, $password)
    {
        $conn = App::resolve(Database::class);
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $sql = "UPDATE client SET name = :name, email = :email, phoneNo = :phoneNo, password = :password WHERE clientID = :clientID";
        $conn->query($sql, [
            ':clientID' => $clientID,
            ':name' => $name,
            ':email' => $email,
            ':phoneNo' => $phoneNo,
            ':password' => $hashedPassword
        ]);
    }

    public static function delete($clientID)
    {
        $conn = App::resolve(Database::class);
        $sql = "DELETE FROM client WHERE clientID = :clientID";
        $conn->query($sql, ['clientID' => $clientID]);
    }

    public static function findById($clientID)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM client WHERE clientID = :clientID LIMIT 1";
        $conn = $conn->query($sql, [':clientID' => $clientID]);
        return $conn->find(PDO::FETCH_ASSOC);
    }

    public static function findByEmail($email)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM client WHERE email = :email LIMIT 1";
        $conn = $conn->query($sql, ['email' => $email]);
        return $conn->find(PDO::FETCH_ASSOC);
    }

    public static function getAllClients()
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM client";
        $conn = $conn->query($sql);
        return $conn->get(PDO::FETCH_ASSOC);
    }

    public static function getLatestClientId()
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT clientID FROM Client ORDER BY clientID DESC LIMIT 1";
        $stmt = $conn->query($sql);
        return $stmt->findColumn();
    }

    public static function getClientBirthById($clientId){
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM clientinfo WHERE clientId = :clientId LIMIT 1";
        $conn = $conn->query($sql, [':clientId' => $clientId]);
        return $conn->find(PDO::FETCH_ASSOC);
    }

    public static function getClientsDoctorNotesById($clientId){
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM doctorNotes WHERE clientId = :clientId LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute([':clientId' => $clientId]);
        
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result === false || empty($result['diagnosis'])) {
            return ['diagnosis' => 'To be decided']; 
        }
        return $result;
    }
}

