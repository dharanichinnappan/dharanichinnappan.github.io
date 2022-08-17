
<?php include 'database.php'; ?>
<?php $number= $_GET['number']?>
<?php
$query = "select * from contacts where mobilenumber='$number'";
$result = $conn->query($query);
$row = $result->fetch_assoc();

?>
<html>
<head>
<title>Contact Display</title>
<script type="text/javascript" src="../js/angular.js"></script>
<script type="text/javascript" src="../js/angular-route.js"></script>
<script type="text/javascript" src="../js/controller.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">

<script type="text/javascript">
    function clicked() {
       if (confirm('Do you want to delete the contact?')) {
           angular.element(document.getElementById('body')).scope().deleteContact(<?php echo $row['mobilenumber']?>);
          
       } else {
           return false;
       }
    }

</script>

</head>
<body ng-app="myApp" ng-controller="contactModifyCntrl" id="body">
	<div class="col-sm-12 col-md-4 col-md-offset-4 col-lg-4 container">
		<div class="col-sm-12 col-md-12 col-lg-12 outerContainer">
			<div class="col-sm-12 col-md-12 col-lg-12 contactImageContainer">

				<div class="col-sm-1 col-md-1 col-lg-1">
					<a href="index.php"> <i class="fa fa-arrow-left"></i></a>
				</div>

				<div class="col-sm-11 col-md-11 col-lg-11 contactModify">
					<a ng-click="update(<?php echo $row['mobilenumber']?>)"> <i
						class="fa fa-pencil"></i></a> <a><i onclick="clicked()"
						class="fa fa-trash"></i></a>
				</div>

				<div class="col-sm-12 col-md-12 col-lg-12 contactImage">
					<img src="../user.jpg">
				<?php #  echo '<img src="data:image/jpeg;base64,'.base64_encode( $row['image'] ).'" width="100%" height="200px" />'; ?>				
				</div>

			</div>
			<div class="col-sm-12 col-md-12 col-lg-12 ">
				<div class="col-sm-12 col-md-12 col-lg-12 contactDetails">
					<div class="col-sm-1 col-md-1 col-lg-1">
						<i class="fa fa-user"></i>
					</div>
					<div class="col-sm-11 col-md-11 col-lg-11 borderBottom"><?php echo $row['contactname'] . '  '.$row['lastname']?></div>

					<div class="col-sm-1 col-md-1 col-lg-1">
						<i class="fa fa-phone"></i>
					</div>
					<div class="col-sm-11 col-md-11 col-lg-11 borderBottom"><?php echo $row['mobilenumber']?></div>
					<div class="col-sm-1 col-md-1 col-lg-1">
						<i class="material-icons" >email</i>
					</div>
					<div class="col-sm-11 col-md-11 col-lg-11 borderBottom">
					<?php echo $row['email']?>
					</div>
				</div>

			</div>
		</div>

	</div>
</body>
</html>