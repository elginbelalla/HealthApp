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