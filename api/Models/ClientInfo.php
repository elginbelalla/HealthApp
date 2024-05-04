<?php

namespace App\Models;

use Core\App;
use Core\Database;
use PDO;

class ClientInfo
{
    protected $clientInfoId;
    protected $clientId;
    protected $fullName;
    protected $gender;
    protected $dateOfBirth;
    protected $placeOfBirth;
    protected $height;
    protected $weight;
    protected $personalPrevHistory;
    protected $personalPrevMedication;
    protected $personalNotes;
    protected $familyPrevHistory;
    protected $familyPrevMedication;
    protected $familyNotes;

    protected $conn;

    public function __construct($clientInfoId, $clientId, $fullName, $gender, $dateOfBirth, $placeOfBirth, $height, $weight, $personalPrevHistory, $personalPrevMedication, $personalNotes, $familyPrevHistory, $familyPrevMedication, $familyNotes)
    {
        $this->clientInfoId = $clientInfoId;
        $this->clientId = $clientId;
        $this->fullName = $fullName;
        $this->gender = $gender;
        $this->dateOfBirth = $dateOfBirth;
        $this->placeOfBirth = $placeOfBirth;
        $this->height = $height;
        $this->weight = $weight;
        $this->personalPrevHistory = $personalPrevHistory;
        $this->personalPrevMedication = $personalPrevMedication;
        $this->personalNotes = $personalNotes;
        $this->familyPrevHistory = $familyPrevHistory;
        $this->familyPrevMedication = $familyPrevMedication;
        $this->familyNotes = $familyNotes;

        $this->conn = App::resolve(Database::class);
    }

    public static function create($clientId, $fullName, $gender, $dateOfBirth, $placeOfBirth, $height, $weight)
    {
        $conn = App::resolve(Database::class);
        $sql = "INSERT INTO clientinfo (clientId, fullName, gender, dateOfBirth, placeOfBirth, height, weight) 
                VALUES (:clientId, :fullName, :gender, :dateOfBirth, :placeOfBirth, :height, :weight)";
        $conn->query($sql, [
            ':clientId' => $clientId,
            ':fullName' => $fullName,
            ':gender' => $gender,
            ':dateOfBirth' => $dateOfBirth,
            ':placeOfBirth' => $placeOfBirth,
            ':height' => $height,
            ':weight' => $weight,
        ]);
    }

    public static function add_update_personal_health($clientId, $personalPrevHistory, $personalPrevMedication, $personalNotes)
    {
        $conn = App::resolve(Database::class);
        $sql = "UPDATE clientInfo SET personalPrevHistory = :personalPrevHistory, personalPrevMedication = :personalPrevMedication, personalNotes = :personalNotes 
            WHERE clientId = :clientId";
        $conn->query($sql, [
            ':personalPrevHistory' => $personalPrevHistory,
            ':personalPrevMedication' => $personalPrevMedication,
            ':personalNotes' => $personalNotes,
            ':clientId' => $clientId
        ]);
    }

    public static function add_update_family_health($clientId, $familyPrevHistory, $familyPrevMedication, $familyNotes)
    {
        $conn = App::resolve(Database::class);
        $sql = "UPDATE clientInfo SET familyPrevHistory = :familyPrevHistory, familyPrevMedication = :familyPrevMedication, familyNotes = :familyNotes 
            WHERE clientId = :clientId";
        $conn->query($sql, [
            ':familyPrevHistory' => $familyPrevHistory,
            ':familyPrevMedication' => $familyPrevMedication,
            ':familyNotes' => $familyNotes,
            ':clientId' => $clientId
        ]);
    }


    public static function update_personal_info($clientId, $fullName, $gender, $dateOfBirth, $placeOfBirth, $height, $weight)
    {

        $conn = App::resolve(Database::class);
        $sql = "UPDATE clientinfo SET fullName = :fullName, gender = :gender, dateOfBirth = :dateOfBirth, placeOfBirth = :placeOfBirth, height = :height, weight = :weight) 
                WHERE clientId = :clientId";
        $conn->query($sql, [
            ':clientId' => $clientId,
            ':fullName' => $fullName,
            ':gender' => $gender,
            ':dateOfBirth' => $dateOfBirth,
            ':placeOfBirth' => $placeOfBirth,
            ':height' => $height,
            ':weight' => $weight
        ]);
    }

    public static function get_personal_info_by_clientId($clientId)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT personalPrevHistory, personalPrevMedication, personalNotes FROM clientinfo WHERE clientId = :clientId";
        $conn = $conn->query($sql, [':clientId' => $clientId]);
        return $conn->get(PDO::FETCH_ASSOC);
    }

    public static function get_family_info_by_clientId($clientId)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT familyPrevHistory, familyPrevMedication, familyNotes FROM clientinfo WHERE clientId = :clientId";
        $conn = $conn->query($sql, [':clientId' => $clientId]);
        return $conn->get(PDO::FETCH_ASSOC);
    }

    public static function findById($clientInfoId)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM clientinfo WHERE clientInfoId = :clientInfoId LIMIT 1";
        $conn = $conn->query($sql, [':clientInfoId' => $clientInfoId]);
        return $conn->get(PDO::FETCH_ASSOC);
    }

    public static function findByClientId($clientId)
    {
        $conn = App::resolve(Database::class);
        $sql = "SELECT * FROM clientinfo WHERE clientId = :clientId LIMIT 1";
        $conn = $conn->query($sql, [':clientId' => $clientId]);
        return $conn->get(PDO::FETCH_ASSOC);
    }

    public static function delete($clientInfoId)
    {
        $conn = App::resolve(Database::class);
        $sql = "DELETE FROM clientinfo WHERE clientInfoId = :clientInfoId";
        $conn->query($sql, [':clientInfoId' => $clientInfoId]);
    }

    public static function deleteByClientId($clientId)
    {
        $conn = App::resolve(Database::class);
        $sql = "DELETE FROM clientinfo WHERE clientId = :clientId";
        $conn->query($sql, [':clientId' => $clientId]);
    }
}
