<?php

require_once  '../HealthApp/app/init.php';

$app = new App;
$router = new Router;

$routes = require_once '../HealthApp/app/views/routes.php';
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$method = $_SERVER['REQUEST_METHOD'];

// TODO: Fix $method so that it also accept other request methdods except `Post` and `Get`
$router->route($uri, $method);
