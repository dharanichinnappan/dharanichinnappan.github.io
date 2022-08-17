<?php include 'database.php';  ?>
<?php

$newName=$_GET['newName'];

$newLastName=$_GET['newLastName'];
$oldNumber=$_GET['oldNumber'];
$newNumber=$_GET['newNumber'];
$newEmail=$_GET['newEmail'];



$query="update contacts set contactname='$newName' ,lastname='$newLastName',email='$newEmail', mobilenumber='$newNumber' where mobilenumber='$oldNumber'";

if ($conn->query($query) === TRUE) {
    header("Location:display.php?number=" . $newNumber . "");
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}
?>
