<?php

namespace Core\Middleware;

class Authenticated
{
    public function handle()
    {
        if (!$_SESSION['user'] ?? false || $_SESSION['user']['role'] !== 'patient') {
            header('location: /');
            exit();
        }
    }
}
