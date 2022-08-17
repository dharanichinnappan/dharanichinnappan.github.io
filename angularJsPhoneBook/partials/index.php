<html>
<head>
<title>Phone Book</title>

<script type="text/javascript" src="../js/angular.js"></script>
<script type="text/javascript" src="../js/angular-route.js"></script>
<script type="text/javascript" src="../js/controller.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../css/style.css">



</head>
<body ng-app="myApp" ng-controller="indexController">

	<div class="outerContainer">
		<div class="col-sm-12 col-md-12 col-lg-12 contacts ">
			<div class="col-sm-6 col-md-6 col-lg-6">CONTACTS</div>
			<div class="col-sm-6 col-md-6 col-lg-6 rightAlign"
				ng-click="addNewContact()">
				<a><i class="fa fa-plus-circle plus "></i></a>
			</div>
		</div>

		<div class="col-sm-12 col-md-12 col-lg-12 table">
			<table class="table">
				<tr>
					<th>Name</th>
					<th>Last Name</th>
					<th>E-Mail</th>
					<th>Number</th>
					<!-- <th>Photo</th> -->
				</tr>
				<tr ng-repeat="contact in contactList track by $index "
					ng-click="display(contact.mobilenumber)">

					<td>{{contact.contactname}}</td>
					<td>{{contact.lastname}}</td>
					<td>{{contact.email}}</td>
					<td>{{contact.mobilenumber}}</td>
					<!-- <td><img src="data:image/jpeg;base64,{{contact.image}}"
						width="100%" height="50px" /></td> -->
				</tr>

			</table>
		</div>

	</div>



</body>
</html>