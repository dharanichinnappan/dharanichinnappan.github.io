myApp = angular.module("myApp", []);

myApp.controller('loginController',function($scope) {
	$scope.password_type = 'password';
	$scope.login = function() {
		$scope.pattern = "^[^@]+@[^@]+\.[^@]+$";
		var regex = new RegExp($scope.pattern);
		if ($scope.email == null || $scope.password == null	|| $scope.confirm_password == null) {
			if ($scope.email == null) {
				document.getElementById("email").setCustomValidity("Please enter a email");
			} else if ($scope.password == null) {
				document.getElementById("password").setCustomValidity("Please enter a password.Password must contain atleast 8 characters");
			} else if ($scope.confirm_password == null) {
				document.getElementById("confirm_password").setCustomValidity("Password does not match");
				document.getElementById("confirm_password").style.outlineColor = "red";
			}
		}

		else {
			if ($scope.email != null && regex.test($scope.email) == false) {
				document.getElementById("email").setCustomValidity("Enter a valid email ");
			} else if ($scope.password != null
					&& $scope.password.length < 8) {
				document.getElementById("password").setCustomValidity("Password must contain atleast 8 characters");
			} else if ($scope.confirm_password != $scope.password) {
				document.getElementById("confirm_password").setCustomValidity("Password does not match");
				document.getElementById("confirm_password").style.outlineColor = "red";
			} else if ($scope.password != null && $scope.confirm_password != null
						&& $scope.password.length >= 8 && $scope.password == $scope.confirm_password)
				{
					location.href = "index.html";
				}
			}

			document.getElementById("email").oninput = function() {
				document.getElementById("email").setCustomValidity('');
			}
			document.getElementById("password").oninput = function() {
				document.getElementById("password").setCustomValidity('');
			}
			document.getElementById("confirm_password").oninput = function() {
				document.getElementById("confirm_password").setCustomValidity('');
				document.getElementById("confirm_password").style.outlineColor = "";
			}

		}
		$scope.showPassword = function(event) {
			if (event.target.checked == true) {
				$scope.password_type = 'text';
			}
			if (event.target.checked == false) {
				$scope.password_type = 'password';
			}
		}
	})