<?php include 'database.php'; ?>
<?php

$query = "select contactname,lastname,email,mobilenumber from contacts";
$result = $conn->query($query);

$contactList = array();

while ($contacts = $result->fetch_assoc()) {

    $contactList[]=['contactname'=> $contacts['contactname'],'lastname'=>$contacts['lastname'],'email'=>$contacts['email'],'mobilenumber'=>$contacts['mobilenumber']];
    //$contactList[]=['contactname'=> $contacts['contactname'],'lastname'=>$contacts['lastname'],'email'=>$contacts['email'],'mobilenumber'=>$contacts['mobilenumber'],'image'=>base64_encode($contacts['image'])];
    
}
//$array=array($contactList);
//echo gettype($contactList);
//echo count($contactList);
//echo count($contactList);
echo json_encode($contactList);


