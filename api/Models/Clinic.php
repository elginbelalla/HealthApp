<?php

namespace App\Models;

use Core\App;
use Core\Database;
use PDO;

class Clinic
{
    protected $clinicId;
    protected $clinicName;
    protected $clinicAddress;
    protected $clinicPhoneNo;
    protected $clinicInfo;
    protected $clinicPassword;
    protected $clinicLogo;

    public function __construct($clinicId, $clinicName, $clinicAddress, $clinicPhoneNo, $clinicInfo, $clinicPassword, $clinicLogo)
    {
    }

    public static function create($name, $email, $phoneNo, $password)
    {
        $conn = App::resolve(Database::class);
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO clinic (clinicName, clinicEmail, clinicPhoneNo, clinicPassword) VALUES (:clinicName, :clinicEmail, :clinicPhoneNo, :clinicPassword)";
        $conn->query($sql, [
            ':clinicName' => $name,
            ':clinicEmail' => $email,
            ':clinicPhoneNo' => $phoneNo,
            ':clinicPassword' => $hashedPassword
        ]);

        return $conn->connection->lastInsertId();
    }

    public static function findByEmail($clinicEmail)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM clinic WHERE clinicEmail = :clinicEmail LIMIT 1";
        $conn = $conn->query($sql, ['clinicEmail' => $clinicEmail]);
        return $conn->find(PDO::FETCH_ASSOC);
    }
}
