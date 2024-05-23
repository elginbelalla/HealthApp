<?php

$router->post('/HealthApp/api/saveSignUpInfo', 'User/signUp');
$router->post('/HealthApp/api/signIn', 'User/logIn');
$router->post('/HealthApp/api/saveFiles', 'User/saveFiles');

$router->get('/HealthApp/api/getPersonalInfo', 'Client/getPersonal');
$router->post('/HealthApp/api/savePersonalInfo', 'Client/setPersonal');

$router->get('/HealthApp/api/getPersonalHealth', 'Client/getPersonalHealth');
$router->post('/HealthApp/api/savePersonalHealth', 'Client/setPersonalHealth');

$router->get('/HealthApp/api/getFamilyHealth', 'Client/getFamilyHealth');
$router->post('/HealthApp/api/saveFamilyHealth', 'Client/setFamilyHealth');

$router->post('/HealthApp/api/getDashboard', 'Doctor/getDashboard');
$router->post('/HealthApp/api/getAppBar', 'Doctor/getAppBar');

$router->post('/HealthApp/api/getPatients', 'Doctor/getPatients');
$router->post('/HealthApp/api/getPatientSearchBar', 'Doctor/getPatientSearchBar');

$router->post('/HealthApp/api/setDoctorWorkingHours', 'Doctor/setDoctorWorkingHours');
$router->post('/HealthApp/api/getDoctorWorkingHours', 'Doctor/getDoctorWorkingHours');

$router->post('/HealthApp/api/getDoctorAppointments', 'Doctor/getDoctorAppointments');

$router->post('/HealthApp/api/getTests', 'Doctor/getTests');
$router->post('/HealthApp/api/setTestFile', 'Doctor/setTestFile');

$router->post('/HealthApp/api/getDoctorProfile', 'Doctor/getDoctorProfile');
$router->post('/HealthApp/api/setDoctorProfile', 'Doctor/setDoctorProfile');
$router->post('/HealthApp/api/setDoctorSecurity', 'Doctor/setDoctorSecurity');
$router->post('/HealthApp/api/getDoctorPerformance', 'Doctor/getDoctorPerformance');

$router->post('/HealthApp/api/getDoctorConversations', 'Doctor/getDoctorConversations');

$router->post('/HealthApp/api/setClinicAppointment', 'Client/setClinicAppointment');
$router->post('/HealthApp/api/setDoctorAppointment', 'Client/setDoctorAppointment');

