<?php

function OpenCon()
{
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "root";
    $db = "template_reviews";
    //$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connection échouée : %s\n". $conn -> error);
    $conn = new PDO('mysql:host=localhost;dbname=template_reviews;charset=utf8', $dbuser, $dbpass);

    return $conn;
}
   
?>