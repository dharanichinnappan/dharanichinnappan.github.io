myApp = angular.module("myApp", []);

myApp.controller('indexController', function($scope, $http, $filter) {
	$scope.from = "";
	$scope.to = "";
	$http.get('data.json').success(function(data) {
		$scope.datas = data;
		$scope.copy_of_datas = $scope.datas;
		angular.forEach($scope.datas, function(value, key) {

		})
		console.log($scope.datas[1]);
	})
	$scope.sort_asc = function(data) {

		$scope.datas = $filter('orderBy')($scope.datas, data);
	}

	$scope.sort_des = function(data) {
		$scope.datas = $filter('orderBy')($scope.datas, data, true);
	}
	$scope.filter = function(from, to) {
		$scope.n = 0;
		$scope.from = from;
		$scope.to = to;
		console.log($scope.from + "and" + $scope.to);

		angular.forEach($scope.copy_of_datas, function(value, key) {
			if (value != null) {
				$scope.start_date = Date.parse(value.start_date);
				if ($scope.from > $scope.start_date) {
					$scope.datas[key] = null
				}
				$scope.end_date = Date.parse(value.end_date);

				if ($scope.end_date > $scope.to) {
					$scope.datas[key] = null;
				}
			}
		});
		console.log($scope.n);

	}

	$scope.reset = function() {
		$scope.datas = $scope.copy_of_datas;
		console.log($scope.datas);
	}
});

myApp
		.controller(
				'loginController',
				function($scope) {
					document.getElementById("email_null").style.display = "none";
					document.getElementById("password_match_error").style.display = "none";
					$scope.login = function() {
						if ($scope.email == null) {
							console.log("email is null");
							document.getElementById("email_null").style.display = "block";
							const input = document.getElementById("email");
							input.focus();
						}
						if ($scope.password != $scope.confirm_password) {
							const input = document
									.getElementById("confirm_password");
							input.focus();

							document.getElementById("password_match_error").style.display = "block";

						}
					}
				})
