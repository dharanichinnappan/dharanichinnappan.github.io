myApp = angular.module("myApp", []);

myApp.controller('indexController', function($scope, $http, $filter) {
	$scope.from = "";
	$scope.to = "";

	$http.get('data.json').success(function(data) {
		$scope.datas = data;
		$scope.datas_original_copy = angular.copy($scope.datas);
	})

	$scope.sort_asc = function(data) {
		if (data == 'start_date') {
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
				angular.forEach($scope.copy_of_datas, function(value_copy,
						key_copy) {
					if (value != null && value_copy != null) {
						if (value.id == value_copy.id) {
							$scope.datas.push(value_copy);
						}
					}
				})
			})
		} else if (data == 'end_date') {

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
				angular.forEach($scope.copy_of_datas, function(value_copy,
						key_copy) {
					if (value.id == value_copy.id) {
						$scope.datas.push(value_copy);
					}
				})
			})

		} else {
			$scope.datas = $filter('orderBy')($scope.datas, data);
		}

	}

	$scope.sort_des = function(data) {
		if (data == 'start_date') {
			$scope.copy = [];
			$scope.copy_of_datas = []

			$scope.copy = angular.copy($scope.datas);
			$scope.copy_of_datas = angular.copy($scope.datas);

			angular.forEach($scope.copy, function(value, key) {
				if (value != null) {
					value.start_date = new Date(value.start_date);
				}
			})

			$scope.copy = $filter('orderBy')($scope.copy, data, true);

			$scope.datas = [];

			angular.forEach($scope.copy, function(value, key) {
				angular.forEach($scope.copy_of_datas, function(value_copy,
						key_copy) {
					if (value.id == value_copy.id) {
						$scope.datas.push(value_copy);
					}
				})
			})
		} else if (data == 'end_date') {
			$scope.copy = [];
			$scope.copy_of_datas = []

			$scope.copy = angular.copy($scope.datas);
			$scope.copy_of_datas = angular.copy($scope.datas);

			angular.forEach($scope.copy, function(value, key) {
				if (value != null) {
					value.end_date = new Date(value.end_date);
				}
			})

			$scope.copy = $filter('orderBy')($scope.copy, data, true);

			$scope.datas = [];

			angular.forEach($scope.copy, function(value, key) {
				angular.forEach($scope.copy_of_datas, function(value_copy,
						key_copy) {
					if (value.id == value_copy.id) {
						$scope.datas.push(value_copy);
					}
				})
			})

		} else {
			$scope.datas = $filter('orderBy')($scope.datas, data, true);
		}
	}
	
/* logics for filtering */
	$scope.filter = function(from, to) {
		if(from>to){
			document.getElementById("to").setCustomValidity(
			"Enter a valid end date");
		}
		else if (from != "" && to != "") {
			$scope.from = from;
			$scope.to = to;
			$scope.datas = []

			$scope.datas = angular.copy($scope.datas_original_copy);
			angular.forEach($scope.datas, function(value, key) {

				$scope.start_date = new Date(value.start_date);
				$scope.end_date = new Date(value.end_date);
/*
 * In given data,few start dates are higher than end date. So adding
 * "$scope.from > $scope.end_date || $scope.to < $scope.start_date"
 */
				if ($scope.start_date < $scope.from
						|| $scope.end_date > $scope.to
						|| $scope.from > $scope.end_date
						|| $scope.to < $scope.start_date) {
					$scope.datas[key] = null;

				}
			})
		}
		else if(from!="" && to==""){
			
			$scope.from = from;
			$scope.to = to;
			$scope.datas = []

			$scope.datas = angular.copy($scope.datas_original_copy);
			angular.forEach($scope.datas, function(value, key) {

				$scope.start_date = new Date(value.start_date);
				$scope.end_date = new Date(value.end_date);

				if ($scope.start_date < $scope.from) {
					$scope.datas[key] = null;

				}
			})
		}
		else if(from =="" && to!=""){
			$scope.from = from;
			$scope.to = to;
			$scope.datas = []
			$scope.datas = angular.copy($scope.datas_original_copy);
			angular.forEach($scope.datas, function(value, key) {

				$scope.start_date = new Date(value.start_date);
				$scope.end_date = new Date(value.end_date);

				if ($scope.end_date > $scope.to) {
					$scope.datas[key] = null;

				}
			})
		}
	}

	$scope.reset = function() {
		$http.get('data.json').success(function(data) {
			$scope.datas = data;

		})
	}
});
