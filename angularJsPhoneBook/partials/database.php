<?php
$servername = "localhost";
$username = "root";
$password = "????????";
$dbname = "phonebook";
$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    printf("Connect failed: %s\n",$conn->connect_error);
    exit;
}


?>