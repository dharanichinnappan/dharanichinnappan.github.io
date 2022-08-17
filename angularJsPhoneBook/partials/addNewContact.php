<html>
<head>
<title>Add Contact</title>
<script type="text/javascript" src="../js/angular.js"></script>
<script type="text/javascript" src="../js/angular-route.js"></script>
<script type="text/javascript" src="../js/controller.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../css/style.css">
</head>
<body ng-app="myApp" ng-controller="AddNewContactCntrl">
	<div class="col-sm-12 col-md-4 col-md-offset-4 col-lg-4 container">
		<div class="col-sm-12 col-md-12 col-lg-12 outerContainer">
			<div class="col-sm-12 col-md-12 col-lg-12 addNewContactsHeading ">
				<div class="col-sm-1 col-md-1 col-lg-1" id="close">
					<a href="index.php"><i class="fa fa-close"></i></a>
				</div>
				<div class="col-sm-11 col-md-11 col-lg-11">Add New Contact</div>


			</div>
			<div class="col-sm-12 col-md-12 col-lg-12">

				<div>
					<input type="text" ng-model="firstName" placeholder="First Name">
				</div>
				<div>
					<input type="text" ng-model="lastName" placeholder="Last Name">
				</div>
				<div>
					<input type="email" ng-model="eMail" placeholder="E Mail">
				</div>
				<div>
					<input type="text" ng-model="mobileNumber" placeholder="Phone">
				</div>
				<div>
					<input type="button" id="save" ng-click="save()" value="SAVE">
				</div>

			</div>

			<!-- <div class="col-sm-3 col-lg-3 col-md-3" id="save" ng-click="save()"><a>SAVE</a></div> -->
			<div class="col-sm-12 col-md-12 col-lg-12" id="required">Enter all
				the details</div>

		</div>

	</div>
</body>
</html>