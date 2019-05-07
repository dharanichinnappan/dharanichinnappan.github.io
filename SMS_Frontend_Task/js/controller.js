myApp = angular.module("myApp", []);

myApp.controller('indexController', function($scope, $http, $filter) {
	$scope.from = "";
	$scope.to = "";

	$http.get('data.json').success(function(data) {
		$scope.datas = data;

	})

	$scope.sort_asc = function(data) {
		if(data=='start_date'){
			
			$scope.copy = [];
			$scope.copy_of_datas = []			
			$scope.copy = angular.copy($scope.datas);
			$scope.copy_of_datas = angular.copy($scope.datas);

			
			angular.forEach($scope.copy, function(value, key) {
				if (value != null) {
					value.start_date = new Date(value.start_date);
				}
			})
			
			$scope.copy = $filter('orderBy')($scope.copy, data);

			$scope.datas = [];

			angular.forEach($scope.copy, function(value, key) {
				angular.forEach($scope.copy_of_datas,
						function(value_copy, key_copy) {
							if ( value.id == value_copy.id) {
								$scope.datas.push(value_copy);
							}
						})
			})
		}
		if(data=='end_date'){
			$scope.m = 0;
			$scope.copy = [];
			$scope.copy_of_datas = []
			
			$scope.copy = angular.copy($scope.datas);
			$scope.copy_of_datas = angular.copy($scope.datas);

			
			angular.forEach($scope.copy, function(value, key) {
				if (value != null) {
					value.end_date = new Date(value.end_date);
				}
			})
			
			$scope.copy = $filter('orderBy')($scope.copy, data);


			$scope.datas = [];

			angular.forEach($scope.copy, function(value, key) {
				angular.forEach($scope.copy_of_datas,
						function(value_copy, key_copy) {
							if ( value.id == value_copy.id) {
								$scope.datas.push(value_copy);
							}
						})
			})
			
		}
		
	}

	$scope.sort_des = function(data) {
		if(data=='start_date'){
			$scope.m = 0;
			$scope.copy = [];
			$scope.copy_of_datas = []
			
			$scope.copy = angular.copy($scope.datas);
			$scope.copy_of_datas = angular.copy($scope.datas);

			
			angular.forEach($scope.copy, function(value, key) {
				if (value != null) {
					value.start_date = new Date(value.start_date);
				}
			})
			
			$scope.copy = $filter('orderBy')($scope.copy, data,true);

			
			$scope.datas = [];

			angular.forEach($scope.copy, function(value, key) {
				angular.forEach($scope.copy_of_datas,
						function(value_copy, key_copy) {
							if ( value.id == value_copy.id) {
								$scope.datas.push(value_copy);
							}
						})
			})
		}
		if(data=='end_date'){
			$scope.m = 0;
			$scope.copy = [];
			$scope.copy_of_datas = []
			
			$scope.copy = angular.copy($scope.datas);
			$scope.copy_of_datas = angular.copy($scope.datas);

			
			angular.forEach($scope.copy, function(value, key) {
				if (value != null) {
					value.end_date = new Date(value.end_date);
				}
			})
			
			$scope.copy = $filter('orderBy')($scope.copy, data,true);

			

			$scope.datas = [];

			angular.forEach($scope.copy, function(value, key) {
				angular.forEach($scope.copy_of_datas,
						function(value_copy, key_copy) {
							if ( value.id == value_copy.id) {
								$scope.datas.push(value_copy);
							}
						})
			})
			
		}
	}

	$scope.filter = function(from, to) {
		$scope.n = 0;
		$scope.from = from;
		$scope.to = to;
		$scope.datas = []
		angular.forEach($scope.copy_of_datas, function(value, key) {
			$scope.datas.push(value);
		})

		angular.forEach($scope.datas, function(value, key) {

			$scope.start_date = new Date(value.start_date);
			$scope.end_date = new Date(value.end_date);

			if ($scope.start_date < $scope.from || $scope.end_date > $scope.to
					|| $scope.from > $scope.end_date
					|| $scope.to < $scope.start_date) {
				$scope.datas[key] = null;

			}
		})
		angular.forEach($scope.datas, function(value, key) {
			if (value != null) {
				$scope.n++;
			}

		})
		
	}

	$scope.reset = function() {
		angular.forEach($scope.copy_of_datas, function(value, key) {
			$scope.datas.push(value);
		})
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
