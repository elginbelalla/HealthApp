<?php

namespace Core\Middleware;

class Admin
{
    public function handle()
    {
        if (!isset($_SESSION['user']) || $_SESSION['user']['role'] !== 'admin') {
            // Redirect to unauthorized page
            header('Location: /unauthorized');
            exit();
        }
    }
}
