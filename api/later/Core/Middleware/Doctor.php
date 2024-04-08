<?php

namespace Core\Middleware;

class Doctor
{
    public function handle()
    {
        if (!isset($_SESSION['user']) || $_SESSION['user']['role'] !== 'doctor') {
            // Redirect to unauthorized page
            header('Location: /unauthorized');
            exit();
        }
    }
}
