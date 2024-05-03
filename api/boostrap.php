<?php

require_once '../api/Core/Container.php';
require_once '../api/Core/App.php';
require_once '../api/Core/Database.php';

use Core\App;
use Core\Container;
use Core\Database;


$container = new Container();

$container->bind(Database::class, function () {
    $config = require('../api/config.php');
    return new Database($config['database']['server'], $config['database']['dbname'], $config['database']['user'], $config['database']['pass']);
});

App::setContainer($container);
