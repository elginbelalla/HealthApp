-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2024 at 10:45 PM
-- Server version: 8.0.33
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medinteract`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appointmentId` int NOT NULL,
  `dateOfAppointment` datetime DEFAULT NULL,
  `clientId` int DEFAULT NULL,
  `doctorId` int DEFAULT NULL,
  `clinicId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `clientID` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNo` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`clientID`, `name`, `email`, `phoneNo`, `password`) VALUES
(1, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(2, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(3, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(4, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(5, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(6, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '1123456776'),
(7, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(8, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(9, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(10, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(11, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(12, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(13, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(14, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(15, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(16, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(17, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(18, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(19, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '123456789'),
(20, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(21, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '123456789'),
(22, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '123456789'),
(23, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '123456789'),
(24, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(25, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(26, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '123456789'),
(27, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(28, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '123456789'),
(29, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(30, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(31, 'TestName', 'testName@email.com', '0676503334', '12345678'),
(32, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '1123456789'),
(33, 'bamboo', 'bamb@bamb.com', '0676503334', '123456789'),
(34, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '123456789'),
(35, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '123456789'),
(36, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '12345678'),
(37, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$1dASPC9dicvMStXUsnAeZOXyYxN0xIgu9dvncOoyhil7F..6yQmcm'),
(38, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$VmZQif7E9sUI1rr8VCcJpOXg60alr9WbfzEtTGxglLzvGiiEiyuAW'),
(39, 'HEREEEEEEEEE', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$.1O0gEkIOyTYSKztV3W19ucOSrbuDkIIOStZ2R9uQ0RHGCgiymLj2'),
(40, 'YAYYY', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$woHm5cr95E6R3kvfTNwYKOf3TY5UMAS2fAGQzxY7MymReBkHp4U0a'),
(41, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$HfwlsPqpfpjFQTBZeBPb.ObSgeALAWL15fz9bClsmszDEokJ26riy'),
(42, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$inHaVeT4Qh.5ZhhgcP1st.0ymTJSew.pdzRpKv9vYm/qzWyY3cIaa'),
(43, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$YXfi1tDpQEVdTiH6NP4mmucIukKAz0ChyQOMD7ockzuu/om60IVt.'),
(44, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$9nsMzi3qirp6PouJUyUTHOnrR8pqm3JuYCr1zPkUIH68wD1BFqfBi'),
(45, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$2JCXAUpaZRNSJTl9dK/LdevpTAyff1QxlicYPFPyXQ0gohx/pLbkq'),
(46, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$V3suXPHfJc0tlVMdv5v7UenZbVF8OTnCjhmc22DTsEgLW/RS/USxq'),
(47, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$e2Lm4YkTzFuZA1fVSy89KuSzCaOQJ.uHVAExPtQMnfIBbEaBCae1m'),
(48, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$JFqkscfTDUPVUDCLLb7kAOh9cZPEfdl7vh2UjNvRnW8dntKyYwh6K'),
(49, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$9bn2zq1nclTPlEimAGKzEuJr1crz/97z015pocH1e20kzodYyZRGq'),
(50, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$mrgmvODO1Z9F3LpACb/FW.uiCemXfr21IqqS6A8yy6YqouYsmgkvm'),
(51, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$RYP4Anvx2jLSg1Y9bQH6eeL/tFWC16csmCWwM/PP5XOD23ZuAik7G'),
(52, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$r4KlFru6.dHS3Pyalb7uJOhbYFl9e4qUsz2ptDpCAfi5Vf3avZT8W'),
(53, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$gPlPXfn0bGWJPXZeJ3vK.O4ka2D6HXAzzeEFI8U0iKHy5DYc.DLHu'),
(54, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$t2Ezu4GgXqCdKyyLJk.HVuh8NzMp1bnF9fYMNLHrWLQlkhLwT7veO'),
(55, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$jRzSwSZsbO73dVcwng6bxuWdFu4UosvaMb.wz.D2rUOsNRrHJnWVe'),
(56, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$ZmlXUOjxsHSXFi0JwkCq4ORnB2uBvfzmeopCbotw8CKbszJ/QPbA6'),
(57, 'Eno Bendi', 'eno.bendi7@gmail.com', '0676503334', '$2y$10$STkiO7Q9aDrI0Upecbtv0u54yLwroGZ.9n.a3AnfS.TPHT9UcnQ76'),
(58, 'Eno Bendi', 'test123@test123.com', '0676503334', '$2y$10$Pqw9u0EjLG8O4tHUiGAUAOQhobCk2bQyrV0Fdt.KDnJnZqTW7jXQC');

-- --------------------------------------------------------

--
-- Table structure for table `clientclinicmessages`
--

CREATE TABLE `clientclinicmessages` (
  `clientClinicMessageId` int NOT NULL,
  `clientClinicConversationId` int DEFAULT NULL,
  `sender` enum('client','clinic') DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `timestamp` datetime DEFAULT (now())
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clientdoctormessages`
--

CREATE TABLE `clientdoctormessages` (
  `clientdoctorMessageId` int NOT NULL,
  `clientDoctorConversationId` int DEFAULT NULL,
  `sender` enum('client','doctor') DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `timestamp` datetime DEFAULT (now())
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clientinfo`
--

CREATE TABLE `clientinfo` (
  `clientInfoId` int NOT NULL,
  `clientId` int DEFAULT NULL,
  `fullName` varchar(255) NOT NULL,
  `gender` int NOT NULL,
  `dateOfBirth` varchar(10) DEFAULT NULL,
  `placeOfBirth` varchar(255) DEFAULT NULL,
  `height` varchar(20) DEFAULT NULL,
  `weight` varchar(20) DEFAULT NULL,
  `personalPrevHistory` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `personalPrevMedication` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `personalNotes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `familyPrevHistory` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `familyPrevMedication` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `familyNotes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `clientinfo`
--

INSERT INTO `clientinfo` (`clientInfoId`, `clientId`, `fullName`, `gender`, `dateOfBirth`, `placeOfBirth`, `height`, `weight`, `personalPrevHistory`, `personalPrevMedication`, `personalNotes`, `familyPrevHistory`, `familyPrevMedication`, `familyNotes`) VALUES
(2, 18, 'Eno', 0, '2003-02-04', 'Albania', '145', '149', '', '', '', '', '', ''),
(3, 23, 'eNO', 1, '3333-03-23', 'Albania', '2', '2', NULL, NULL, NULL, NULL, NULL, NULL),
(4, 24, 'Eno', 0, '2003-02-04', 'Albania', '12', '12', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 25, 'Eno', 0, '1213-01-01', 'Albania', '1', '1', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 26, 'Eno', 0, '2003-02-04', 'Albania', '11', '11', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 27, 'Eno', 0, '2203-02-02', 'Albania', '20', '20', NULL, NULL, NULL, NULL, NULL, NULL),
(8, 28, 'Eno', 0, '2003-02-04', 'Albania', '1', '1', 'Test-health', 'Test-medication', 'Test-notes', NULL, NULL, NULL),
(9, 29, 'Eno', 1, '2003-02-04', '2003', '120', '120', 'Test-health', 'Test-medication', 'Test-notes', NULL, NULL, NULL),
(10, 30, 'Eno', 0, '2003-02-04', 'Tiran', '1', '1', 'health', 'med', 'notes', 'Fhealth', 'Fmedicaiton', 'Fnotes'),
(11, 31, 'Test Name', 0, '2003-02-04', 'Tiran', '0', '0', 'meHealth', 'meMed', 'meNotes', 'famHealth', 'famMed', 'famNotes'),
(12, 33, 'Bamboo the second', 1, '0001-01-01', '2003', '1', '-2', 'Test TEST', 'TEST TEST', 'TEST TEST', 'TEST', 'TESTWWWWWWWWW', 'TEST'),
(13, 35, 'Ebi', 1, '9999-09-09', '-1', '-7', '20000000', 'Test', 'test', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'a', 'b', 'c'),
(15, 36, 'te', 0, '1111-11-11', '1', '11', '11', NULL, NULL, NULL, NULL, NULL, NULL),
(16, NULL, 'Test???', 0, '2222-02-02', 'al', '120', '420', NULL, NULL, NULL, NULL, NULL, NULL),
(17, NULL, 'Test-name', 0, '2003-02-04', 'Albania', '120', '120', NULL, NULL, NULL, NULL, NULL, NULL),
(18, NULL, 'test', 1, '2003-02-04', 'tIRAN', '120', '120', NULL, NULL, NULL, NULL, NULL, NULL),
(19, 44, 'TESSSSSSSSSSS', 0, '1212-12-12', 'SEX', '3', '2', 'SEX', 'SEX', 'SEX', NULL, NULL, NULL),
(20, 46, 'MOM', 1, '2222-02-02', 'MMOM', '-4', '3', 'MOMTEST', 'MOMTEST', 'MOMTEST', NULL, NULL, NULL),
(21, 48, 'azs', 0, '1111-01-01', 'aca', '-4', '-4', 'get', 'get', 'gat', NULL, NULL, NULL),
(22, 58, 'Test-name', 0, '2003-02-04', 'Al', '-2', '-2', 'test-test', 'test-test', 'testicles', '1', '2', '3');

-- --------------------------------------------------------

--
-- Table structure for table `client_clinicconversation`
--

CREATE TABLE `client_clinicconversation` (
  `clientClinicConversationId` int NOT NULL,
  `Client_clientID` int DEFAULT NULL,
  `Clinic_clinicID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `client_doctorconversation`
--

CREATE TABLE `client_doctorconversation` (
  `clientDoctoraConversationId` int NOT NULL,
  `Client_clientID` int DEFAULT NULL,
  `Doctor_doctorID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clinic`
--

CREATE TABLE `clinic` (
  `clinicId` int NOT NULL,
  `clinicName` varchar(255) DEFAULT NULL,
  `clinicAddress` varchar(255) DEFAULT NULL,
  `clinicPhoneNo` varchar(255) DEFAULT NULL,
  `clinicInfo` varchar(255) DEFAULT NULL,
  `clinicPassword` varchar(255) DEFAULT NULL,
  `clinicLogo` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clinic_doctors`
--

CREATE TABLE `clinic_doctors` (
  `Clinic_clinicId` int NOT NULL,
  `Doctors_clinicid` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctornotes`
--

CREATE TABLE `doctornotes` (
  `doctorNotesId` int NOT NULL,
  `clientId` int DEFAULT NULL,
  `physicalExam` varchar(255) DEFAULT NULL,
  `diagnosis` varchar(255) DEFAULT NULL,
  `plan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctorratings`
--

CREATE TABLE `doctorratings` (
  `ratingId` int NOT NULL,
  `doctorId` int DEFAULT NULL,
  `clientId` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `dateOfReview` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `doctorId` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `clinicid` int DEFAULT NULL,
  `specialty` varchar(255) DEFAULT NULL,
  `phoneNo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `profileInfo` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `familyhealth`
--

CREATE TABLE `familyhealth` (
  `familyHId` int NOT NULL,
  `clientId` int DEFAULT NULL,
  `prevHistory` varchar(255) DEFAULT NULL,
  `prevMedication` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patientslist`
--

CREATE TABLE `patientslist` (
  `id` int NOT NULL,
  `clinicId` int DEFAULT NULL,
  `doctorId` int DEFAULT NULL,
  `clientId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personalhealth`
--

CREATE TABLE `personalhealth` (
  `personalHealthId` int NOT NULL,
  `clientId` int DEFAULT NULL,
  `healthConcerns` varchar(255) DEFAULT NULL,
  `previousMedication` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `symptomreport`
--

CREATE TABLE `symptomreport` (
  `symptomReportId` int NOT NULL,
  `clientId` int DEFAULT NULL,
  `report` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `testId` int NOT NULL,
  `test` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `testresultlist`
--

CREATE TABLE `testresultlist` (
  `tableResultListId` int NOT NULL,
  `clientId` int DEFAULT NULL,
  `doctorId` int DEFAULT NULL,
  `clinicId` int DEFAULT NULL,
  `testType` text,
  `requestDate` datetime DEFAULT NULL,
  `arrivalDate` datetime DEFAULT NULL,
  `testid` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appointmentId`),
  ADD KEY `clientId` (`clientId`),
  ADD KEY `doctorId` (`doctorId`),
  ADD KEY `clinicId` (`clinicId`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`clientID`);

--
-- Indexes for table `clientclinicmessages`
--
ALTER TABLE `clientclinicmessages`
  ADD PRIMARY KEY (`clientClinicMessageId`),
  ADD KEY `clientClinicConversationId` (`clientClinicConversationId`);

--
-- Indexes for table `clientdoctormessages`
--
ALTER TABLE `clientdoctormessages`
  ADD PRIMARY KEY (`clientdoctorMessageId`),
  ADD KEY `clientDoctorConversationId` (`clientDoctorConversationId`);

--
-- Indexes for table `clientinfo`
--
ALTER TABLE `clientinfo`
  ADD PRIMARY KEY (`clientInfoId`),
  ADD KEY `clientId` (`clientId`);

--
-- Indexes for table `client_clinicconversation`
--
ALTER TABLE `client_clinicconversation`
  ADD PRIMARY KEY (`clientClinicConversationId`),
  ADD KEY `Client_clientID` (`Client_clientID`),
  ADD KEY `Clinic_clinicID` (`Clinic_clinicID`);

--
-- Indexes for table `client_doctorconversation`
--
ALTER TABLE `client_doctorconversation`
  ADD PRIMARY KEY (`clientDoctoraConversationId`),
  ADD KEY `Doctor_doctorID` (`Doctor_doctorID`),
  ADD KEY `Client_clientID` (`Client_clientID`);

--
-- Indexes for table `clinic`
--
ALTER TABLE `clinic`
  ADD PRIMARY KEY (`clinicId`);

--
-- Indexes for table `clinic_doctors`
--
ALTER TABLE `clinic_doctors`
  ADD PRIMARY KEY (`Clinic_clinicId`,`Doctors_clinicid`),
  ADD KEY `Doctors_clinicid` (`Doctors_clinicid`);

--
-- Indexes for table `doctornotes`
--
ALTER TABLE `doctornotes`
  ADD PRIMARY KEY (`doctorNotesId`),
  ADD KEY `clientId` (`clientId`);

--
-- Indexes for table `doctorratings`
--
ALTER TABLE `doctorratings`
  ADD PRIMARY KEY (`ratingId`),
  ADD KEY `doctorId` (`doctorId`),
  ADD KEY `clientId` (`clientId`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`doctorId`),
  ADD KEY `clinicid` (`clinicid`);

--
-- Indexes for table `familyhealth`
--
ALTER TABLE `familyhealth`
  ADD PRIMARY KEY (`familyHId`),
  ADD KEY `clientId` (`clientId`);

--
-- Indexes for table `patientslist`
--
ALTER TABLE `patientslist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clinicId` (`clinicId`),
  ADD KEY `doctorId` (`doctorId`),
  ADD KEY `clientId` (`clientId`);

--
-- Indexes for table `personalhealth`
--
ALTER TABLE `personalhealth`
  ADD PRIMARY KEY (`personalHealthId`),
  ADD KEY `clientId` (`clientId`);

--
-- Indexes for table `symptomreport`
--
ALTER TABLE `symptomreport`
  ADD PRIMARY KEY (`symptomReportId`),
  ADD KEY `clientId` (`clientId`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`testId`);

--
-- Indexes for table `testresultlist`
--
ALTER TABLE `testresultlist`
  ADD PRIMARY KEY (`tableResultListId`),
  ADD KEY `clientId` (`clientId`),
  ADD KEY `doctorId` (`doctorId`),
  ADD KEY `clinicId` (`clinicId`),
  ADD KEY `testid` (`testid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appointmentId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `clientID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `clientclinicmessages`
--
ALTER TABLE `clientclinicmessages`
  MODIFY `clientClinicMessageId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clientdoctormessages`
--
ALTER TABLE `clientdoctormessages`
  MODIFY `clientdoctorMessageId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clientinfo`
--
ALTER TABLE `clientinfo`
  MODIFY `clientInfoId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `client_clinicconversation`
--
ALTER TABLE `client_clinicconversation`
  MODIFY `clientClinicConversationId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `client_doctorconversation`
--
ALTER TABLE `client_doctorconversation`
  MODIFY `clientDoctoraConversationId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clinic`
--
ALTER TABLE `clinic`
  MODIFY `clinicId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctornotes`
--
ALTER TABLE `doctornotes`
  MODIFY `doctorNotesId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctorratings`
--
ALTER TABLE `doctorratings`
  MODIFY `ratingId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `doctorId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `familyhealth`
--
ALTER TABLE `familyhealth`
  MODIFY `familyHId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patientslist`
--
ALTER TABLE `patientslist`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personalhealth`
--
ALTER TABLE `personalhealth`
  MODIFY `personalHealthId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `symptomreport`
--
ALTER TABLE `symptomreport`
  MODIFY `symptomReportId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `testId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testresultlist`
--
ALTER TABLE `testresultlist`
  MODIFY `tableResultListId` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`),
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`doctorId`) REFERENCES `doctors` (`doctorId`),
  ADD CONSTRAINT `appointment_ibfk_3` FOREIGN KEY (`clinicId`) REFERENCES `clinic` (`clinicId`);

--
-- Constraints for table `clientclinicmessages`
--
ALTER TABLE `clientclinicmessages`
  ADD CONSTRAINT `clientclinicmessages_ibfk_1` FOREIGN KEY (`clientClinicConversationId`) REFERENCES `client_clinicconversation` (`clientClinicConversationId`);

--
-- Constraints for table `clientdoctormessages`
--
ALTER TABLE `clientdoctormessages`
  ADD CONSTRAINT `clientdoctormessages_ibfk_1` FOREIGN KEY (`clientDoctorConversationId`) REFERENCES `client_doctorconversation` (`clientDoctoraConversationId`);

--
-- Constraints for table `clientinfo`
--
ALTER TABLE `clientinfo`
  ADD CONSTRAINT `clientinfo_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`);

--
-- Constraints for table `client_clinicconversation`
--
ALTER TABLE `client_clinicconversation`
  ADD CONSTRAINT `client_clinicconversation_ibfk_1` FOREIGN KEY (`Client_clientID`) REFERENCES `client` (`clientID`),
  ADD CONSTRAINT `client_clinicconversation_ibfk_2` FOREIGN KEY (`Clinic_clinicID`) REFERENCES `clinic` (`clinicId`);

--
-- Constraints for table `client_doctorconversation`
--
ALTER TABLE `client_doctorconversation`
  ADD CONSTRAINT `client_doctorconversation_ibfk_1` FOREIGN KEY (`Doctor_doctorID`) REFERENCES `doctors` (`doctorId`),
  ADD CONSTRAINT `client_doctorconversation_ibfk_2` FOREIGN KEY (`Client_clientID`) REFERENCES `client` (`clientID`);

--
-- Constraints for table `clinic_doctors`
--
ALTER TABLE `clinic_doctors`
  ADD CONSTRAINT `clinic_doctors_ibfk_1` FOREIGN KEY (`Clinic_clinicId`) REFERENCES `clinic` (`clinicId`),
  ADD CONSTRAINT `clinic_doctors_ibfk_2` FOREIGN KEY (`Doctors_clinicid`) REFERENCES `doctors` (`clinicid`);

--
-- Constraints for table `doctornotes`
--
ALTER TABLE `doctornotes`
  ADD CONSTRAINT `doctornotes_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`),
  ADD CONSTRAINT `doctornotes_ibfk_2` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`);

--
-- Constraints for table `doctorratings`
--
ALTER TABLE `doctorratings`
  ADD CONSTRAINT `doctorratings_ibfk_1` FOREIGN KEY (`doctorId`) REFERENCES `doctors` (`doctorId`),
  ADD CONSTRAINT `doctorratings_ibfk_2` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`);

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`clinicid`) REFERENCES `clinic` (`clinicId`);

--
-- Constraints for table `familyhealth`
--
ALTER TABLE `familyhealth`
  ADD CONSTRAINT `familyhealth_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`),
  ADD CONSTRAINT `familyhealth_ibfk_2` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`);

--
-- Constraints for table `patientslist`
--
ALTER TABLE `patientslist`
  ADD CONSTRAINT `patientslist_ibfk_1` FOREIGN KEY (`clinicId`) REFERENCES `clinic` (`clinicId`),
  ADD CONSTRAINT `patientslist_ibfk_2` FOREIGN KEY (`doctorId`) REFERENCES `doctors` (`doctorId`),
  ADD CONSTRAINT `patientslist_ibfk_3` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`);

--
-- Constraints for table `personalhealth`
--
ALTER TABLE `personalhealth`
  ADD CONSTRAINT `personalhealth_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`),
  ADD CONSTRAINT `personalhealth_ibfk_2` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`);

--
-- Constraints for table `symptomreport`
--
ALTER TABLE `symptomreport`
  ADD CONSTRAINT `symptomreport_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`);

--
-- Constraints for table `testresultlist`
--
ALTER TABLE `testresultlist`
  ADD CONSTRAINT `testresultlist_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientID`),
  ADD CONSTRAINT `testresultlist_ibfk_2` FOREIGN KEY (`doctorId`) REFERENCES `doctors` (`doctorId`),
  ADD CONSTRAINT `testresultlist_ibfk_3` FOREIGN KEY (`clinicId`) REFERENCES `clinic` (`clinicId`),
  ADD CONSTRAINT `testresultlist_ibfk_4` FOREIGN KEY (`testid`) REFERENCES `test` (`testId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
