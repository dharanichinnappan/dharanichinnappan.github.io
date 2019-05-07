myApp = angular.module("myApp", []);

myApp.controller('indexController', function($scope, $http, $filter) {
	$scope.from = "";
	$scope.to = "";
	$scope.load = function() {
		console.log("load function is being called");
		$http.get('data.json').success(function(data) {
			$scope.datas = data;
			$scope.copy_of_datas = data;
		})
	}

	$scope.sort_asc = function(data) {
		if (data == 'start_date') {

			$scope.copy = $scope.copy_of_datas;
			angular.forEach($scope.copy, function(value, key) {

				$scope.start_date = new Date(value.start_date);
				value.start_date = $scope.start_date;
			})

			$scope.datas = $filter('orderBy')($scope.copy, data, false);
			angular.forEach($scope.datas, function(value, key) {

				$scope.start_date = value.start_date.toLocaleDateString();
				value.start_date = $scope.start_date;
			})

		}
		if (data == 'end_date') {
			$scope.copy = $scope.copy_of_datas;
			angular.forEach($scope.copy, function(value, key) {
				$scope.end_date = new Date(value.end_date);
				value.end_date = $scope.end_date;
			})

			$scope.datas = $filter('orderBy')($scope.copy, data, false);
			angular.forEach($scope.datas, function(value, key) {
				$scope.end_date = value.end_date.toLocaleDateString();
				value.end_date = $scope.end_date;
				console.log(value.end_date);
			})
		} else {
			$scope.datas = $filter('orderBy')($scope.datas, data);
		}
	}

	$scope.sort_des = function(data) {
		if (data == 'start_date') {

			$scope.copy = $scope.copy_of_datas;
			angular.forEach($scope.copy, function(value, key) {

				$scope.start_date = new Date(value.start_date);
				value.start_date = $scope.start_date;
			})

			$scope.datas = $filter('orderBy')($scope.copy, data, true);
			angular.forEach($scope.datas, function(value, key) {

				$scope.start_date = value.start_date.toLocaleDateString();
				value.start_date = $scope.start_date;

			})
		} else {
			$scope.datas = $filter('orderBy')($scope.datas, data, true);
		}
	}

	$scope.filter = function(from, to) {
		$scope.n = 0;
		angular.forEach($scope.datas, function(value, key) {
			if (value != null) {
				$scope.n++;
			}
		})
		console.log($scope.n + " is $scope.datas at the begging");
		
		$scope.from = from;
		$scope.to = to;
		$scope.load();
		var count = Object.keys($scope.datas).length;
		console.log(count + " is $scope.datas before looping after loading size");
		
		angular.forEach($scope.datas, function(value, key) {
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
		$scope.n=0;
		angular.forEach($scope.datas, function(value, key) {
			if (value != null) {
				$scope.n++;
			}
		})
		
		console.log($scope.n + " is $scope.datas after filtering");
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
