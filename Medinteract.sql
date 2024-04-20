CREATE TABLE `Client` (
  `clientID` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(255),
  `phoneNo` VARCHAR(255),
  `password` VARCHAR(255)
);

CREATE TABLE `ClientInfo` (
    `clientInfoId` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `clientId` INTEGER,
    `firstName` VARCHAR(255),
    `lastName` VARCHAR(255),
    `dateOfBirth` VARCHAR(10),
    `placeOfBirth` VARCHAR(255),
    `height` VARCHAR(20),
    `weight` VARCHAR(20),
    FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`)
);

CREATE TABLE `PersonalHealth` (
  `personalHealthId` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `clientId` INTEGER,
  `healthConcerns` VARCHAR(255),
  `previousMedication` VARCHAR(255),
  `notes` VARCHAR(255),
  FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`)
);

CREATE TABLE `FamilyHealth` (
  `familyHId` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `clientId` INTEGER,
  `prevHistory` VARCHAR(255),
  `prevMedication` VARCHAR(255),
  `notes` VARCHAR(255),
  FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`)
);

CREATE TABLE `DoctorNotes` (
  `doctorNotesId` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `clientId` INTEGER,
  `physicalExam` VARCHAR(255),
  `diagnosis` VARCHAR(255),
  `plan` VARCHAR(255),
  FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`)
);

CREATE TABLE `Test` (
  `testId` integer PRIMARY KEY AUTO_INCREMENT,
  `test` longblob
);

CREATE TABLE `Appointment` (
  `appointmentId` integer PRIMARY KEY AUTO_INCREMENT,
  `dateOfAppointment` datetime,
  `clientId` integer,
  `doctorId` integer,
  `clinicId` integer
);

CREATE TABLE `Doctors` (
  `doctorId` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `lastName` varchar(255),
  `email` varchar(255),
  `clinicid` integer,
  `specialty` varchar(255),
  `phoneNo` varchar(255),
  `address` varchar(255),
  `profileInfo` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `Clinic` (
  `clinicId` integer PRIMARY KEY AUTO_INCREMENT,
  `clinicName` varchar(255),
  `clinicAddress` varchar(255),
  `clinicPhoneNo` varchar(255),
  `clinicInfo` varchar(255),
  `clinicPassword` varchar(255),
  `clinicLogo` longblob
);

CREATE TABLE `DoctorRatings` (
  `ratingId` integer PRIMARY KEY AUTO_INCREMENT,
  `doctorId` integer,
  `clientId` integer,
  `rating` integer,
  `review` varchar(255),
  `dateOfReview` datetime
);

CREATE TABLE `PatientsList` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `clinicId` integer,
  `doctorId` integer,
  `clientId` integer
);

CREATE TABLE `TestResultList` (
  `tableResultListId` integer PRIMARY KEY AUTO_INCREMENT,
  `clientId` integer,
  `doctorId` integer,
  `clinicId` integer,
  `testType` text,
  `requestDate` datetime,
  `arrivalDate` datetime,
  `testid` integer
);

CREATE TABLE `ClientClinicMessages` (
  `clientClinicMessageId` integer PRIMARY KEY AUTO_INCREMENT,
  `clientClinicConversationId` integer,
  `sender` ENUM ('client', 'clinic'),
  `text` varchar(255),
  `timestamp` datetime DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `SymptomReport` (
  `symptomReportId` integer PRIMARY KEY AUTO_INCREMENT,
  `clientId` integer,
  `report` varchar(255)
);

CREATE TABLE `Clinic_Doctors` (
  `Clinic_clinicId` integer,
  `Doctors_clinicid` integer,
  PRIMARY KEY (`Clinic_clinicId`, `Doctors_clinicid`)
);

CREATE TABLE `Client_ClinicConversation` (
  `clientClinicConversationId` integer PRIMARY KEY AUTO_INCREMENT,
  `Client_clientID` integer,
  `Clinic_clinicID` integer
);

CREATE TABLE `Client_DoctorConversation` (
  `clientDoctoraConversationId` integer PRIMARY KEY AUTO_INCREMENT,
  `Client_clientID` integer,
  `Doctor_doctorID` integer
);

CREATE TABLE `ClientDoctorMessages` (
  `clientdoctorMessageId` integer PRIMARY KEY AUTO_INCREMENT,
  `clientDoctorConversationId` integer,
  `sender` ENUM ('client', 'doctor'),
  `text` varchar(255),
  `timestamp` datetime DEFAULT (CURRENT_TIMESTAMP)
);

ALTER TABLE `PersonalHealth` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `FamilyHealth` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `DoctorNotes` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `Appointment` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `Appointment` ADD FOREIGN KEY (`doctorId`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `Appointment` ADD FOREIGN KEY (`clinicId`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `Doctors` ADD FOREIGN KEY (`clinicid`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `DoctorRatings` ADD FOREIGN KEY (`doctorId`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `DoctorRatings` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `PatientsList` ADD FOREIGN KEY (`clinicId`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `PatientsList` ADD FOREIGN KEY (`doctorId`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `PatientsList` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `TestResultList` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `TestResultList` ADD FOREIGN KEY (`doctorId`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `TestResultList` ADD FOREIGN KEY (`clinicId`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `TestResultList` ADD FOREIGN KEY (`testid`) REFERENCES `Test` (`testId`);

ALTER TABLE `ClientClinicMessages` ADD FOREIGN KEY (`clientClinicConversationId`) REFERENCES `Client_ClinicConversation` (`clientClinicConversationId`);

ALTER TABLE `SymptomReport` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `Clinic_Doctors` ADD FOREIGN KEY (`Clinic_clinicId`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `Clinic_Doctors` ADD FOREIGN KEY (`Doctors_clinicid`) REFERENCES `Doctors` (`clinicid`);

ALTER TABLE `Client_ClinicConversation` ADD FOREIGN KEY (`Client_clientID`) REFERENCES `Client` (`clientID`);

ALTER TABLE `Client_ClinicConversation` ADD FOREIGN KEY (`Clinic_clinicID`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `Client_DoctorConversation` ADD FOREIGN KEY (`Doctor_doctorID`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `Client_DoctorConversation` ADD FOREIGN KEY (`Client_clientID`) REFERENCES `Client` (`clientID`);

ALTER TABLE `ClientDoctorMessages` ADD FOREIGN KEY (`clientDoctorConversationId`) REFERENCES `Client_DoctorConversation` (`clientDoctoraConversationId`);
