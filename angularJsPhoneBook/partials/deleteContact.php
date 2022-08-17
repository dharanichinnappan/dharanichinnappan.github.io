<?php include 'database.php'; ?>
<?php 
$number=$_GET['number'];
$query="delete from contacts where mobilenumber='$number'";
if($conn->query($query)===TRUE){
    header("Location:index.php");
}
?>
