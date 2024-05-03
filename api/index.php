<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

const BASE_PATH = __DIR__ . '/';

require_once '../api/boostrap.php';
require_once '../api/config.php';
require_once '../api/model_bindings.php';
require_once '../api/Core/App.php';
require_once '../api/Core/Container.php';
require_once '../api/Core/Database.php';
require_once '../api/Core/Router.php';

use Core\Router;

$router = new Router();
require BASE_PATH . 'routes.php';

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$method = $_SERVER['REQUEST_METHOD'];

$router->route($uri, $method);
