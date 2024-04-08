<?php

namespace Core\Middleware;

class Clinic
{
    public function handle()
    {
        if (!isset($_SESSION['user']) || $_SESSION['user']['role'] !== 'clinic') {
            header('Location: /unauthorized');
            exit();
        }
    }
}
