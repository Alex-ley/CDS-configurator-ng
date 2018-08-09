var app = angular.module('CDS-config-app', []);
	app.controller('configurator', ['$scope', function($scope) {
		$scope.todos = [
								{text:'Learn AngularJS', done:true},
								{text:'build a single page AngularJS app', done:false}
							];
		$scope.addTodo = function() {
			if($scope.todoText !== '') {
				$scope.todos.push({text:$scope.todoText, done:false});
				$scope.todoText = '';
			}
		};

		$scope.new_values = {
								'Clients':{'text':'Instrument Clients','value':1, 'disabled':false, 'show':true},
								'TF':{'text':'Thermo Fisher Instruments','value':1, 'disabled':false, 'show':true},
								'GC':{'text':'3rd Party GC Instruments','value':0, 'disabled':false, 'show':true},
								'LC':{'text':'3rd Party LC Instruments','value':0, 'disabled':false, 'show':true},
								'Total':{'text':'Total Instruments','value':1, 'disabled':true, 'show':true},
								'Data':{'text':'Data Clients','value':0, 'disabled':false, 'show':true},
								'Total_Clients':{'text':'Total Clients','value':1, 'disabled':false, 'show':false},
								'License':{'text':'License key','value':1, 'disabled':false, 'show':false}
							};

		$scope.existing_values = {
								'Clients':{'text':'Instrument Clients','value':1, 'disabled':false, 'show':true},
								'TF':{'text':'Thermo Fisher Instruments','value':2, 'disabled':false, 'show':true},
								'GC':{'text':'3rd Party GC Instruments','value':0, 'disabled':false, 'show':true},
								'LC':{'text':'3rd Party LC Instruments','value':0, 'disabled':false, 'show':true},
								'Total':{'text':'Total Instruments','value':2, 'disabled':true, 'show':true},
								'Data':{'text':'Data Clients','value':2, 'disabled':false, 'show':true},
								'Total_Clients':{'text':'Total Clients','value':3, 'disabled':false, 'show':true},
							};

		$scope.new_result_1 = [
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];
		$scope.new_result_2 = [
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];
		$scope.existing_result = [];

		$scope.new_options_1 = [
								{
								'max':{
											'Clients':{'value':1},
											'TF':{'value':1},
											'GC':{'value':0},
											'LC':{'value':0},
											'Total':{'value':1},
											'Data':{'value':999999},
											'Total_Clients':{'value':999999},
											'License':{'value':1}
											},
								'parts':[
												{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
												{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
												{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
												]
								},

								{
								'max':{
											'Clients':{'value':2},
											'TF':{'value':2},
											'GC':{'value':1},
											'LC':{'value':1},
											'Total':{'value':2},
											'Data':{'value':999999},
											'Total_Clients':{'value':999999},
											'License':{'value':1}
											},
								'parts':[
												{'QTY':'Clients','PN':2,'DESC':2,'NOTES':2},
												{'QTY':'TF','PN':2,'DESC':2,'NOTES':2},
												{'QTY':'GC','PN':2,'DESC':2,'NOTES':2}
												]
								}

						];


		$scope.showExisting = function() {};

		$scope.removeCompleted = function() {
			for (var i = $scope.todos.length - 1; i >= 0; i--){
			    if( $scope.todos[i].done === true){
			        $scope.todos[i].text = "done";
			        $scope.todos.splice(i,1);
			    }
			}
		};

		$scope.new_installation = function() {
			// alert("new");
			if ($scope.new_section == "hidden") {
				$scope.new_section = "";
				$scope.existing_section = "hidden";
			}
		};

		$scope.existing_installation = function() {
			// alert("existing");
			if ($scope.existing_section == "hidden") {
				$scope.existing_section = "";
				$scope.new_section = "hidden";
			}
		};

		$scope.update_new = function() {
			// alert("update new");
			$scope.new_values['Total']['value'] =
				parseInt($scope.new_values['TF']['value']) +
				parseInt($scope.new_values['GC']['value']) +
				parseInt($scope.new_values['LC']['value']);

			$scope.new_values['Total_Clients']['value'] =
				parseInt($scope.new_values['Clients']['value']) +
				parseInt($scope.new_values['Data']['value']);

			$scope.new_result_1 = [];

			for (var i = 0; i < $scope.new_options_1.length; i++){
				$scope.new_valid = true;
				for (k in $scope.new_values){
						if( parseInt($scope.new_values[k].value) > $scope.new_options_1[i]['max'][k].value){
								$scope.new_valid = false;
						}
				}
				if($scope.new_valid){
					for (var j = 0; j < $scope.new_options_1[i]['parts'].length; j++){
						$scope.new_result_1.push(
							{
								'QTY':$scope.new_values[$scope.new_options_1[i]['parts'][j]['QTY']].value,
								'PN':$scope.new_options_1[i]['parts'][j]['PN'],
								'DESC':$scope.new_options_1[i]['parts'][j]['DESC'],
								'NOTES':$scope.new_options_1[i]['parts'][j]['NOTES']
							}
						);

					}
					break;
				}
			}

		};

		$scope.update_existing = function() {
			alert("update exist");
		};

		$scope.new_section = "hidden";
		$scope.existing_section = "hidden";
	}]);
