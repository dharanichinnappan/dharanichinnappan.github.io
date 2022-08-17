myApp = angular.module("myApp", [ 'ngRoute' ]);

myApp.controller('indexController', function($scope, $http, $window) {

	$http({
		method : 'get',
		url : 'getData.php',
	}).then(function successCallback(response) {

		$scope.contactList = response.data;

	});

	$scope.addNewContact = function() {
		$window.location = 'addNewContact.php';

	}
	$scope.display = function(number) {
		$window.location = 'display.php?number=' + number;

	};
});
myApp.controller('AddNewContactCntrl', function($scope, $window, $http,
		$location, $httpParamSerializerJQLike) {

	$scope.firstName = "";
	$scope.lastName = "";
	$scope.mobileNumber = "";
	$scope.eMail = "";
	$scope.exists = false;
	$scope.details = false;
	document.getElementById("required").style.display = "none";
	$http({
		method : 'get',
		url : 'getData.php',
	}).then(function successCallback(response) {
		$scope.contactList = response.data;

	});

	$scope.save = function() {

		if ($scope.firstName != "" && $scope.lastName != ""
				&& $scope.mobileNumber != "") {
			$scope.details = true;
			angular.forEach($scope.contactList, function(contact) {
				if (contact['mobilenumber'] == $scope.mobileNumber) {
					$scope.exists = false;
				}

			})

		} else {
			document.getElementById("required").style.display = "block";
			$scope.details = false;
		}

		if ($scope.exists == false && $scope.details == true) {

			var data = {
				firstName : $scope.firstName,
				lastName : $scope.lastName,
				mobileNumber : $scope.mobileNumber,
				eMail:$scope.eMail
			};

			$http({
				url : 'saveContact.php',
				method : "POST",
				data : data
			}).success(
					function(response) {
						window.location.href = 'saveContact.php' + '?'
								+ $httpParamSerializerJQLike(data);
					});

		}
	}

});

myApp.controller('contactModifyCntrl', function($scope, $window, $http,
		$httpParamSerializerJQLike) {

	$http({
		method : 'get',
		url : 'getData.php',
	}).then(function successCallback(response) {
		$scope.contactList = response.data;
		$scope.firstName = $scope.name;
		$scope.lastName = $scope.lastname;
		$scope.mobileNumber = $scope.number;

	});

	$scope.backToDisplay = function(number) {
		$window.location = 'display.php?number=' + number;
	}
	$scope.update = function(mobileNumber) {

		angular.forEach($scope.contactList, function(key) {

			if (key['mobilenumber'] == mobileNumber) {
				$scope.list = key['mobilenumber'];

			}
		});

		$window.location = 'modifyContact.php?number'
				+ $httpParamSerializerJQLike($scope.list);
		;
		// window.location.href="modifyContact.php"+"?"+$httpParamSerializerJQLike($scope.list);
	};

	$scope.saveChanges = function(oldName, oldLastName,oldEmail, oldNumber, newName,
			newLastName, newEmail,newNumber) {
		if (oldName == newName && oldNumber == newNumber
				&& oldLastName == newLastName && oldEmail==newEmail) {
			$window.location = 'display.php?number=' + oldNumber;
		} else {
			data = {
				'newName' : newName,
				'newLastName' : newLastName,
				'oldNumber' : oldNumber,
				'newNumber' : newNumber,
				'newEmail':newEmail
			};
			window.location.href = 'updateContact.php' + '?'
					+ $httpParamSerializerJQLike(data);
		}
	}
	$scope.deleteContact = function(number) {
		$window.location = 'deleteContact.php?number=' + number;
	}
});
