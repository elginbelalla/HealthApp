CREATE TABLE `Client` (
  `clientID` integer PRIMARY KEY,
  `firstName` varchar(255),
  `lastName` varchar(255),
  `email` varchar(255),
  `phoneNo` varchar(255),
  `gender` varchar(10),
  `dateOfBirth` datetime,
  `placeOfBirth` varchar(255),
  `age` integer,
  `height` varchar(20),
  `weight` varchar(20)
);

CREATE TABLE `PersonalHealth` (
  `personalHealthId` integer PRIMARY KEY,
  `clientId` integer,
  `healthConcerns` varchar(255),
  `previousMedication` varchar(255),
  `notes` varchar(255)
);

CREATE TABLE `FamilyHealth` (
  `familiyHId` integer PRIMARY KEY,
  `clientId` integer,
  `prevHistory` varchar(255),
  `prevMedication` varchar(255),
  `notes` varchar(255)
);

CREATE TABLE `DoctorNotes` (
  `doctorNotesId` integer PRIMARY KEY,
  `clientId` integer,
  `physicalExam` varchar(255),
  `diagnosis` varchar(255),
  `plan` varchar(255)
);

CREATE TABLE `Test` (
  `testId` integer PRIMARY KEY,
  `test` longblob
);

CREATE TABLE `Appointment` (
  `appointmentId` integer PRIMARY KEY,
  `dateOfAppointment` datetime,
  `clientId` integer,
  `doctorId` integer,
  `clinicId` integer
);

CREATE TABLE `Doctors` (
  `doctorId` integer PRIMARY KEY,
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
  `clinicId` integer PRIMARY KEY,
  `clinicName` varchar(255),
  `clinicAddress` varchar(255),
  `clinicPhoneNo` varchar(255),
  `clinicInfo` varchar(255),
  `clinicPassword` varchar(255),
  `clinicLogo` longblob
);

CREATE TABLE `DoctorRatings` (
  `ratingId` integer PRIMARY KEY,
  `doctorId` integer,
  `clientId` integer,
  `rating` integer,
  `review` varchar(255),
  `dateOfReview` datetime
);

CREATE TABLE `PatientsList` (
  `id` integer PRIMARY KEY,
  `clinicId` integer,
  `doctorId` integer,
  `clientId` integer
);

CREATE TABLE `TestResultList` (
  `tableResultListId` integer PRIMARY KEY,
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
  `symptomReportId` integer PRIMARY KEY,
  `clientId` integer,
  `name` varchar(255)
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
