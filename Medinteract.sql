CREATE TABLE `Client` (
  `clientID` integer PRIMARY KEY,
  `firstName` string,
  `lastName` stirng,
  `email` varchar(255),
  `phoneNo` varchar(255),
  `gender` string,
  `dateOfBirth` datetime,
  `placeOfBirth` string,
  `age` integer,
  `height` varchar(255),
  `weight` varchar(255)
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

CREATE TABLE `DoctorConversation` (
  `doctorConversationId` integer PRIMARY KEY,
  `clientId` integer,
  `doctorid` integer
);

CREATE TABLE `ClientDoctorMessages` (
  `messagesId` integer PRIMARY KEY,
  `conversationId` integer,
  `senderId` integer,
  `text` vrachar
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
  `name` string,
  `lastName` string,
  `email` varchar(255),
  `clinicid` integer,
  `specialty` string,
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
  `testType` tesxt,
  `requestDate` datetime,
  `arrivalDate` datetime,
  `testid` integer
);

CREATE TABLE `DoctorMessages` (
  `doctorMessagesId` integer PRIMARY KEY,
  `conversationId` integer,
  `senderId` integer,
  `text` vrachar
);

CREATE TABLE `ClientClinicMessages` (
  `clientMessagesId` integer PRIMARY KEY,
  `conversationId` integer,
  `senderId` integer,
  `text` vrachar
);

CREATE TABLE `ClinicConversation` (
  `clinicConversationId` integer PRIMARY KEY,
  `clientId` integer,
  `clinicid` integer
);

CREATE TABLE `ClinicMessages` (
  `doctorMessagesId` integer PRIMARY KEY,
  `conversationId` integer,
  `senderId` integer,
  `text` vrachar
);

CREATE TABLE `SymptomReport` (
  `symptomReportId` integer PRIMARY KEY,
  `clientId` integer,
  `name` varchar(255)
);

ALTER TABLE `PersonalHealth` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `FamilyHealth` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `DoctorNotes` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

CREATE TABLE `Client_DoctorConversation` (
  `Client_clientID` integer,
  `DoctorConversation_clientId` integer,
  PRIMARY KEY (`Client_clientID`, `DoctorConversation_clientId`)
);

ALTER TABLE `Client_DoctorConversation` ADD FOREIGN KEY (`Client_clientID`) REFERENCES `Client` (`clientID`);

ALTER TABLE `Client_DoctorConversation` ADD FOREIGN KEY (`DoctorConversation_clientId`) REFERENCES `DoctorConversation` (`clientId`);


ALTER TABLE `DoctorConversation` ADD FOREIGN KEY (`doctorid`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `ClientDoctorMessages` ADD FOREIGN KEY (`conversationId`) REFERENCES `DoctorConversation` (`doctorConversationId`);

ALTER TABLE `Client` ADD FOREIGN KEY (`clientID`) REFERENCES `ClientDoctorMessages` (`senderId`);

ALTER TABLE `Appointment` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `Appointment` ADD FOREIGN KEY (`doctorId`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `Appointment` ADD FOREIGN KEY (`clinicId`) REFERENCES `Clinic` (`clinicId`);

CREATE TABLE `Clinic_Doctors` (
  `Clinic_clinicId` integer,
  `Doctors_clinicid` integer,
  PRIMARY KEY (`Clinic_clinicId`, `Doctors_clinicid`)
);

ALTER TABLE `Clinic_Doctors` ADD FOREIGN KEY (`Clinic_clinicId`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `Clinic_Doctors` ADD FOREIGN KEY (`Doctors_clinicid`) REFERENCES `Doctors` (`clinicid`);


ALTER TABLE `DoctorRatings` ADD FOREIGN KEY (`doctorId`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `DoctorRatings` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `PatientsList` ADD FOREIGN KEY (`clinicId`) REFERENCES `Clinic` (`clinicId`);

CREATE TABLE `Doctors_PatientsList` (
  `Doctors_doctorId` integer,
  `PatientsList_doctorId` integer,
  PRIMARY KEY (`Doctors_doctorId`, `PatientsList_doctorId`)
);

ALTER TABLE `Doctors_PatientsList` ADD FOREIGN KEY (`Doctors_doctorId`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `Doctors_PatientsList` ADD FOREIGN KEY (`PatientsList_doctorId`) REFERENCES `PatientsList` (`doctorId`);


CREATE TABLE `Client_PatientsList` (
  `Client_clientID` integer,
  `PatientsList_clientId` integer,
  PRIMARY KEY (`Client_clientID`, `PatientsList_clientId`)
);

ALTER TABLE `Client_PatientsList` ADD FOREIGN KEY (`Client_clientID`) REFERENCES `Client` (`clientID`);

ALTER TABLE `Client_PatientsList` ADD FOREIGN KEY (`PatientsList_clientId`) REFERENCES `PatientsList` (`clientId`);


ALTER TABLE `TestResultList` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);

ALTER TABLE `TestResultList` ADD FOREIGN KEY (`doctorId`) REFERENCES `Doctors` (`doctorId`);

ALTER TABLE `TestResultList` ADD FOREIGN KEY (`clinicId`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `TestResultList` ADD FOREIGN KEY (`testid`) REFERENCES `Test` (`testId`);

ALTER TABLE `DoctorMessages` ADD FOREIGN KEY (`conversationId`) REFERENCES `DoctorConversation` (`doctorConversationId`);

ALTER TABLE `Doctors` ADD FOREIGN KEY (`doctorId`) REFERENCES `DoctorMessages` (`senderId`);

ALTER TABLE `ClientClinicMessages` ADD FOREIGN KEY (`conversationId`) REFERENCES `ClinicConversation` (`clinicConversationId`);

ALTER TABLE `Client` ADD FOREIGN KEY (`clientID`) REFERENCES `ClientClinicMessages` (`senderId`);

CREATE TABLE `Client_ClinicConversation` (
  `Client_clientID` integer,
  `ClinicConversation_clientId` integer,
  PRIMARY KEY (`Client_clientID`, `ClinicConversation_clientId`)
);

ALTER TABLE `Client_ClinicConversation` ADD FOREIGN KEY (`Client_clientID`) REFERENCES `Client` (`clientID`);

ALTER TABLE `Client_ClinicConversation` ADD FOREIGN KEY (`ClinicConversation_clientId`) REFERENCES `ClinicConversation` (`clientId`);


ALTER TABLE `ClinicConversation` ADD FOREIGN KEY (`clinicid`) REFERENCES `Clinic` (`clinicId`);

ALTER TABLE `ClinicMessages` ADD FOREIGN KEY (`conversationId`) REFERENCES `ClinicConversation` (`clinicConversationId`);

ALTER TABLE `Clinic` ADD FOREIGN KEY (`clinicId`) REFERENCES `ClinicMessages` (`senderId`);

ALTER TABLE `SymptomReport` ADD FOREIGN KEY (`clientId`) REFERENCES `Client` (`clientID`);
