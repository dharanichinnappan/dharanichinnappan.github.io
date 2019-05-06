myApp = angular.module("myApp", []);

myApp.controller('indexController', function($scope, $http, $filter) {
	$scope.from = "";
	$scope.to = "";
	$scope.load = function() {
		$http.get('data.json').success(function(data) {
			$scope.datas = data;
			$scope.copy_of_datas = $scope.datas;
		})
	}

	$scope.sort_asc = function(data) {
		if (data == 'date') {
			
		} else {
			$scope.datas = $filter('orderBy')($scope.datas, data);
		}
	}

	$scope.sort_des = function(data) {
		if (data == 'date') {
		} else {
			$scope.datas = $filter('orderBy')($scope.datas, data, true);
		}
	}

	$scope.filter = function(from, to) {

		$scope.from = from;
		$scope.to = to;

		angular.forEach($scope.copy_of_datas, function(value, key) {
			if (value != null) {
				$scope.start_date = new Date(value.start_date);
				$scope.end_date = new Date(value.end_date);
				/*
				 * In the given data , few start dates are larger than end
				 * dates. So adding ($scope.start_date>$scope.to ||
				 * $scope.end_date<$scope.from)
				 */
				if ($scope.start_date < $scope.from
						|| $scope.end_date > $scope.to
						|| $scope.start_date >= $scope.to
						|| $scope.end_date <= $scope.from) {
					$scope.datas[key] = null;
				}
			}

		});

	}

	$scope.reset = function() {
		$scope.load();
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
