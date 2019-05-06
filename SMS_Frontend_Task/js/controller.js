myApp = angular.module("myApp", []);

myApp.controller('indexController', function($scope, $http,$filter) {
	$scope.from="";
	$scope.to="";
$http.get('data.json').success(function(data){
	$scope.datas=data;
	$scope.copy_of_datas=$scope.datas;
	console.log($scope.datas[1]);
})
$scope.sort_asc=function(data){
	$scope.datas=$filter('orderBy')($scope.datas,data);
}

$scope.sort_des=function(data){
	$scope.datas=$filter('orderBy')($scope.datas,data,true);
}
$scope.filter=function(from,to){
	
	$scope.from=from;
	$scope.to=to;
	angular.forEach($scope.datas,function(value,key){
		$scope.start_date=new Date(value.start_date);	
		$scope.end_date=new Date(value.start_date);	
		if($scope.start_date<$scope.from || $scope.end_date>$scope.to){			
			$scope.datas.splice(key,1);
			console.log("deleted : "+key);
		}
	});
}

$scope.reset=function(){
	$scope.datas=$scope.copy_of_datas;
}
});

myApp.controller('loginController',function($scope){
	document.getElementById("email_null").style.display="none";
	document.getElementById("password_match_error").style.display="none";
	$scope.login=function(){
		if($scope.email==null){
			console.log("email is null");
			document.getElementById("email_null").style.display="block";
			const input=document.getElementById("email");
			input.focus();
		}
		if($scope.password!=$scope.confirm_password){
			const input=document.getElementById("confirm_password");
			input.focus();
			
			document.getElementById("password_match_error").style.display="block";
			
		}
	}
})
