<?php include 'database.php'; ?>
<?php
$firstName = $_GET['firstName'];
$lastName = $_GET['lastName'];
$mobileNumber = $_GET['mobileNumber'];
$eMail=$_GET['eMail'];
if ($firstName != "" && $mobileNumber != "") {
    $query = "insert into contacts (contactname,lastname,email,mobilenumber) values('$firstName','$lastName','$eMail','$mobileNumber')";
    if ($conn->query($query) === TRUE) {
        header("Location:index.php");
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

?>