<?php include 'database.php'?>
<?php

$number = $_GET['number'];

$query = "select * from contacts where mobilenumber='$number'";
$result = $conn->query($query);
$row = $result->fetch_assoc();

$name = $row['contactname'];
$lastname = $row['lastname'];
$email=$row['email'];

?>
<html>
<head>
<title>Modify Contact</title>
<script type="text/javascript" src="../js/angular.js"></script>
<script type="text/javascript" src="../js/angular-route.js"></script>
<script type="text/javascript" src="../js/controller.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../css/style.css">
</head>
<body ng-app="myApp" ng-controller="contactModifyCntrl"
	ng-init="name='<?php echo $name?>';lastname='<?php echo $lastname?>';eMail='<?php echo $email?>';number='<?php echo $number?>'">
	<div class="col-sm-12 col-md-4 col-md-offset-4 col-lg-4 container">
		<div class="col-sm-12 col-md-12 col-lg-12 outerContainer">
			<div class="col-sm-12 col-md-12 col-lg-12 contacts ">
				<div class="col-sm-1 col-md-1 col-lg-1" id="close">
					<a ng-click="backToDisplay(<?php echo $number?>)"><i
						class="fa fa-close"></i></a>
				</div>
				<div class="col-sm-8 col-md-8 col-lg-8">Edit Contact</div>
				<div class="col-sm-3 col-lg-3 col-md-3"	id="saveChanges" ng-click="saveChanges('<?php echo $name?>','<?php echo $lastname?>','<?php echo $email?>','<?php echo $number?>',firstName,lastName,eMail,mobileNumber)">
					<a>SAVE</a>
				</div>

			</div>
			<div class="col-sm-12 col-md-12 col-lg-12 contactImage">
			<img src="../user.jpg">
			<?php # echo '<img src="data:image/jpeg;base64,'.base64_encode( $row['image'] ).'" width="100%" height="200px" />'; ?>
			</div>

			<div class="col-sm-12 col-md-12 col-lg-12 ">
				<div class="col-sm-12 col-md-12 col-lg-12 contactDetails">
					<div class="col-sm-1 col-md-1 col-lg-1">
						<i class="fa fa-user"></i>
					</div>
					<div class="col-sm-11 col-md-11 col-lg-11 ">
						<input type="text" name="firstName" ng-model="firstName">
					</div>

					<div class="col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-sm-11 col-md-11 col-lg-11">
						<input type="text" ng-model="lastName">
					</div>

					<div class="col-sm-1 col-md-1 col-lg-1">
						<i class="fa fa-mobile"></i>
					</div>
					<div class="col-sm-11 col-md-11 col-lg-11">
						<input type="text" name="number" ng-model="mobileNumber">
					</div>
					<div class="col-sm-1 col-md-1 col-lg-1">
						<i class="fa fa-mobile"></i>
					</div>
					<div class="col-sm-11 col-md-11 col-lg-11">
						<input type="email" name="eMail" ng-model="eMail">
					</div>


				</div>

			</div>

		</div>

	</div>
</body>
</html>