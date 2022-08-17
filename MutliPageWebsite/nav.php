
<head>
<title>Multi Page Website</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script
    src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
<script
    src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
<script src="js/app.js"></script>
<script src="js/controller.js"></script>
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
</head>

<body ng-app="myApp" ng-controller="navController">
	<nav class="navbar navbar-default " role="navigation">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target=".navbar-collapse">
				<span class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#/dashboard">PRODUCT ADMIN</a>
		</div>
		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-center">
				<li><a href="#/dashboard"><i class="fa fa-dashboard"
						style="font-size: 36px; color: white"></i>
						<div>Dashboard</div></a></li>

				<li class="dropdown"><a class="dropdown-toggle"
					data-toggle="dropdown" > <i class="fa fa-file-text-o"
						style="font-size: 36px; color: white;"></i>
						<div>Reports</div> <span class="caret"></span>
				</a>
					<ul class="dropdown-menu">
						<li><a href="#">Daily Report</a></li>
						<li><a href="#">Weekly Report</a></li>
						<li><a href="#">Yearly Report</a></li>
					</ul></li>

				<li><a href="#/products"> <i class="material-icons"
						style="font-size: 36px; color: white;">shopping_cart</i>
						<div>Products</div>
				</a></li>
				<li><a href="#/accounts"> <i class="material-icons"
						style="font-size: 36px; color: white;">account_box</i>
						<div>Accounts</div>
				</a></li>

				<li class="dropdown"><a class="dropdown-toggle"
					data-toggle="dropdown" > <i class="material-icons"
						style="font-size: 36px; color: white;">settings</i>
						<div>Settings</div> <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#">Profile</a></li>
						<li><a href="#">Billing</a></li>
						<li><a href="#">Customize</a></li>
					</ul></li>
			</ul>

			<ul class="nav navbar-nav navbar-right">
				<li><a href="#/login" id="logout" ng-click="show()">Admin, Logout</a></li>
			</ul>
		</div>
	</nav>

</body>

