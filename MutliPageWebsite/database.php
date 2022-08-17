<?php
$servername = "localhost";
$username = "root";
$password = "Dharanic210";
$dbname = "dashboard";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    printf("Connect failed: %s\n", $conn->connect_error);
    exit();
}

?>