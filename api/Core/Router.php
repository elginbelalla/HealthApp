<?php

namespace Core;

use Error;

class Router
{
    protected $routes = [];

    public function add($method, $uri, $controller)
    {
        $this->routes[] = [
            'uri' => $uri,
            'controller' => $controller,
            'method' => $method,
        ];

        return $this;
    }

    public function get($uri, $controller)
    {
        return $this->add('GET', $uri, $controller);
    }

    public function post($uri, $controller)
    {
        return $this->add('POST', $uri, $controller);
    }

    public function delete($uri, $controller)
    {
        return $this->add('DELETE', $uri, $controller);
    }

    public function patch($uri, $controller)
    {
        return $this->add('PATCH', $uri, $controller);
    }

    public function put($uri, $controller)
    {
        return $this->add('PUT', $uri, $controller);
    }

    public function route($uri, $method)
    {

        // echo "\n" . $uri;
        // echo "\n";
        // echo $method . "\n";

        // /HealthApp/api/savePersonalInfo
        // GET

        // require_once("controllers/SavePersonal.php");

        // echo "Here is the routes: \n";
        foreach ($this->routes as $route) {

            if ($route['uri'] === $uri && $route['method'] === strtoupper($method)) {

                return require("controllers/" . $route['controller'] . ".php");
            }
        }




        echo "finished";

        $this->abort();
    }

    public function previousUrl()
    {
        return $_SERVER['HTTP_REFERER'];
    }

    public function abort()
    {
        return die();
    }
}
