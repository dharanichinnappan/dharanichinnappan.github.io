myApp = angular.module("myApp", []);

myApp.controller('indexController',	function($scope, $http, $filter) {
	$scope.from="";
	$scope.to="";
	$http.get('data.json').success(
		function(data) {
			$scope.datas = data;
			$scope.datas_original_copy = angular.copy($scope.datas);
			})
	
	/* Logics for sorting */

	$scope.sort_asc = function(data) {
		if (data == 'start_date') {
		angular.forEach($scope.datas, function(value, key) {
			if (value != null) {
				// converting start_date 'string' to Date Object
				value.start_date = new Date(value.start_date);
			}
		})

		$scope.datas = $filter('orderBy')($scope.datas,	data);

		// Changing the date Object again to string by comparing the sorted	array with original data array
		angular.forEach($scope.datas,function(value_sorted, key_sorted) {
			angular.forEach($scope.datas_original_copy,function(value_original,key_original) {
				if (value_sorted!= null && value_original != null) {
					if (value_sorted.id == value_original.id) {
						value_sorted.start_date = value_original.start_date;
					}
				}
			})
		})
	} 
	else if (data == 'end_date') {
		angular.forEach($scope.datas, function(value, key) {
			if (value != null) {
				// converting end_date 'string' to Date Object
				value.end_date = new Date(value.end_date);
			}
		})

		$scope.datas = $filter('orderBy')($scope.datas,data);

		angular.forEach($scope.datas,function(value_sorted, key_sorted) {
			angular.forEach($scope.datas_original_copy,function(value_original,key_original) {
				if(value_sorted!=null )
					{
					if (value_sorted.id == value_original.id) {
						value_sorted.end_date = value_original.end_date;
					}
				}
			})
		})

	}
	else if (data == 'price') {
		angular.forEach($scope.datas, function(value, key) {
			if (value != null) {
				//Converting price 'String' to 'Float'
				value.price = parseFloat(value.price);
			}
		})

		$scope.datas = $filter('orderBy')($scope.datas,data);

		// Changing the date Object again to string by  comparing the sorted array with original data array
		angular.forEach($scope.datas, function(value_sorted, key_sorted) {
			angular.forEach($scope.datas_original_copy,function(value_original, key_original) {
				if(value_sorted!=null){
					if (value_sorted.id == value_original.id) {
						value_sorted.price = value_original.price;
					}
				}
			})
		})
	}

	else if (data == 'color') {
		for (var c = 0; c < $scope.datas.length; c++) {
			if ($scope.datas[c] !== null) {				
				//Getting the hex value without hash symbol.				 
				var hex = $scope.datas[c].color.substring(1);
	
				/* Getting the RGB values */
				var r = parseInt(hex.substring(0, 2), 16) / 255;
				var g = parseInt(hex.substring(2, 4), 16) / 255;
				var b = parseInt(hex.substring(4, 6), 16) / 255;
	
				// Getting the Max and Min values for  Chroma.				
				var max = Math.max.apply(Math, [ r, g, b ]);
				var min = Math.min.apply(Math, [ r, g, b ]);

				/* Variables for HSV value of hex color. */
				var chr = max - min;
				var hue = 0;
				var val = max;
				var sat = 0;

				if (val > 0) {					
					//Calculating Saturation only if Value is not 0.					
					sat = chr / val;
					if (sat > 0) {
						if (r == max) {
							hue = 60 * (((g - min) - (b - min)) / chr);
							if (hue < 0) {
								hue += 360;
							}
						} else if (g == max) {
							hue = 120 + 60 * (((b - min) - (r - min)) / chr);
						} else if (b == max) {
							hue = 240 + 60 * (((r - min) - (g - min)) / chr);
						}
					}
				}
				/* Modifing existing hex color to HSV value. */
				$scope.datas[c].color = hue;
			}
		}

		$scope.sort_color_asc();

		angular.forEach($scope.datas,function(value_sorted, key_sorted) {
			angular.forEach($scope.datas_original_copy,function(value_original,key_original) {
				if (value_sorted != null) {
					if (value_sorted.id == value_original.id) {
						value_sorted.color = value_original.color; // changing	the	hue	value back to	hex
					}
				}	
			})
		})
	} 
	else {
			$scope.datas = $filter('orderBy')($scope.datas,data);
		}

	}
	$scope.sort_color_asc = function() {

		return $scope.datas.sort(function(a, b) {
			if (a !== null && b != null) {
				return a.color - b.color;
			}
		});

	}
	$scope.sort_des = function(data) {
		if (data == 'start_date') {
			angular.forEach($scope.datas, function(value, key) {
				if (value != null) {
					// Changing start_date'String' to 'Date' Object
					value.start_date = new Date(value.start_date);
				}
			})
			$scope.datas = $filter('orderBy')($scope.datas,'-' + data);

			// Changing the date Object again to string by comparing the sorted array with original data array
			angular.forEach($scope.datas,function(value_sorted, key_sorted) {
				angular.forEach($scope.datas_original_copy,function(value_original,key_original) {
					if (value_sorted != null && value_original != null) {
						if (value_sorted.id == value_original.id) {
							value_sorted.start_date = value_original.start_date;
						}
					}
				})
			})
		} else if (data == 'end_date') {
	
			angular.forEach($scope.datas, function(value, key) {
				if (value != null) {
					// Changing end_date'String' to 'Date' Object
					value.end_date = new Date(value.end_date);
				}
			})
	
			$scope.datas = $filter('orderBy')($scope.datas,	'-' + data);
	
			// Changing the date Object again to string by comparing the sorted	array with original data array
			angular.forEach($scope.datas,function(value_sorted, key_sorted) {
				angular.forEach($scope.datas_original_copy,function(value_original,key_original) {
					if(value_sorted!=null){
						if (value_sorted.id == value_original.id) {
							value_sorted.end_date = value_original.end_date;
						}
					}
				})
			})
	
		} 
		else if (data == 'price') {

			angular.forEach($scope.datas, function(value, key) {
				if (value != null) {
					// Converting price 'String' to 'Float'
					value.price = parseFloat(value.price);
				}
			})
	
			$scope.datas = $filter('orderBy')($scope.datas,'-' + data);
			// Replacing 'float' price value back with 'String'
			angular.forEach($scope.datas, function(value_sorted, key_sorted) {
				angular.forEach($scope.datas_original_copy,function(value_original, key_original) {
					if(value_sorted!=null){
						if (value_sorted.id == value_original.id) {
							value_sorted.price = value_original.price;
						}
					}
				})
			})
	
		}

		else if (data == 'color') {
			for (var c = 0; c < $scope.datas.length; c++) {
				if ($scope.datas[c] != null) {
					// Getting the hex value without hash  symbol.
					
					var hex = $scope.datas[c].color.substring(1);

					/* Getting the RGB values */
					var r = parseInt(hex.substring(0, 2), 16) / 255;
					var g = parseInt(hex.substring(2, 4), 16) / 255;
					var b = parseInt(hex.substring(4, 6), 16) / 255;

					
					// Getting the Max and Min values for Chroma.
					 
					var max = Math.max.apply(Math, [ r, g, b ]);
					var min = Math.min.apply(Math, [ r, g, b ]);

					/* Variables for HSV value of hex color. */
					var chr = max - min;
					var hue = 0;
					var val = max;
					var sat = 0;

					if (val > 0) {
						// Calculate Saturation only if Value is not 0.
						
						sat = chr / val;
						if (sat > 0) {
							if (r == max) {
								hue = 60 * (((g - min) - (b - min)) / chr);
								if (hue < 0) {
									hue += 360;
								}
							} else if (g == max) {
								hue = 120 + 60 * (((b - min) - (r - min)) / chr);
							} else if (b == max) {
								hue = 240 + 60 * (((r - min) - (g - min)) / chr);
							}
						}
					}

					/* Modifing existing objects with HSV */
					$scope.datas[c].color = hue;
				}
			}

			$scope.sort_colors_des();
	
			// Replacing hue with original hex color after sorting
			angular.forEach($scope.datas,function(value_sorted, key_sorted) {
				angular.forEach($scope.datas_original_copy,function(value_original,key_original) {
					if (value_sorted != null) {
							if (value_sorted.id == value_original.id) {
								value_sorted.color = value_original.color;
							}
						}
				   })
			})
		}

		else {
			$scope.datas = $filter('orderBy')($scope.datas,'-' + data);
		}
	}
		$scope.sort_colors_des = function() {
			return $scope.datas.sort(function(a, b) {
				if (a != null && b != null) {
					return b.color - a.color;
				}
			});
		}

		/* logics for filtering */

		$scope.filter = function(from_entered,to_entered) {
			$scope.from=from_entered;
			$scope.to=to_entered;
			var from=document.getElementById("from");
			var to=document.getElementById("to");
			if ((!from.value  && !to.value) ) {
				$scope.datas=angular.copy($scope.datas_original_copy);
				from.setCustomValidity("Enter enter a  date");
				
			}
			from.oninput = function() {
				from.setCustomValidity('');
			}

			// Checking whether a valid date is entered for filtering
			
			if ((to.value && !to.value) && (!from.value)  ) {
				if(from.value > to.value){
					$scope.datas=angular.copy($scope.datas_original_copy);
					to.setCustomValidity("Enter a valid end date");
				}
			}			

			
				
				if ((from.value && to.value)) {
					$scope.datas=angular.copy($scope.datas_original_copy);
					angular.forEach($scope.datas, function(value,key) {
						if(value!=null){
							// converting start_date & end_date from 'String' to 'Date'.
							$scope.start_date = new Date(value.start_date);
							$scope.end_date = new Date(value.end_date);						
						  if($scope.start_date<$scope.end_date){							  
							  if($scope.from>$scope.start_date || $scope.to<$scope.end_date){								 
								  $scope.datas[key]=null;								  
							  }
						  }
						  
						  else if($scope.start_date>$scope.end_date){
							  if($scope.from>$scope.end_date || $scope.end_date>$scope.from){
								  $scope.datas[key]=null;
							  }
						  }
						  else{
							  if($scope.from>$scope.start_date || $scope.to<$scope.end_date){
								  $scope.datas[key]=null;
							  }
						  }
							
						}
					})
					
				}

				if (from.value  && !to.value) {
					$scope.datas=angular.copy($scope.datas_original_copy);
					angular.forEach($scope.datas, function(value,key) {
						if(value!=null){
							// converting start_date & end_date from 'String' to 'Date'.
							$scope.start_date = new Date(value.start_date);
							if($scope.start_date < $scope.from){
								$scope.datas[key] = null; // Replacing values with null which start_end is less than given from date;
							}
						}
					})
				} if (!from.value && to.value) {
					$scope.datas=angular.copy($scope.datas_original_copy);
					angular.forEach($scope.datas, function(value,key) {
						if(value!=null){
							$scope.end_date = new Date(value.end_date);	
							if ($scope.end_date > $scope.to ) {
								$scope.datas[key] = null;// Replacing values with null which end_end is higher than given from date;
							}
						}
					})
				}
			
		}

		$scope.reset = function() {
			from.value="";
			to.value="";
			from.setCustomValidity('');
			to.setCustomValidity('');
			$http.get('data.json').success(function(data) {
				$scope.datas = data;
			})
		}
	});
