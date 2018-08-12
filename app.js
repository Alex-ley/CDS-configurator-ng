var app = angular.module('CDS-config-app', []);
	app.controller('configurator', ['$scope', function($scope) {

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
								'WE_Packages':{'text':'WE Packages on license key','value':1, 'disabled':false, 'show':false},
								'Controllers':{'text':'Instrument Controllers on license key','value':1, 'disabled':false, 'show':false},
								'Clients':{'text':'Instrument Clients','value':1, 'disabled':false, 'show':true},
								'TF':{'text':'Thermo Fisher Instruments','value':2, 'disabled':false, 'show':true},
								'GC':{'text':'3rd Party GC Instruments','value':0, 'disabled':false, 'show':true},
								'LC':{'text':'3rd Party LC Instruments','value':0, 'disabled':false, 'show':true},
								'Total':{'text':'Total Instruments','value':2, 'disabled':true, 'show':true},
								'Data':{'text':'Data Clients','value':2, 'disabled':false, 'show':true},
								'Total_Clients':{'text':'Total Clients','value':3, 'disabled':false, 'show':false},
								'License':{'text':'License key','value':1, 'disabled':false, 'show':false},
								'Max_Controllers_Clients':{'text':'Max of controllers / clients','value':3, 'disabled':false, 'show':false},
								'Max_Instruments_Clients':{'text':'Max of instruments / clients','value':3, 'disabled':false, 'show':false}
							};

		$scope.installation_type = ['Single','Workgroup','Enterprise','Existing SE/WE','Existing a-la-carte'];
		$scope.selected_installation = 'Single';
		$scope.modification_categories = ['Release Upgrade','Adding additional licenses, features or contracts','Converting / Upgrading Instrument licences','Merging license keys'];
		$scope.selected_category = 'Release Upgrade';
		$scope.modification_options = {
				'Release Upgrade':['7.x to 7.x+1 upgrade','Upgrade with support contracts','6.8 to 7.2'],
				'Adding additional licenses, features or contracts':[
													'Adding Remote Data Client for data reprocessing',
													'Adding Client license',
													'Adding Instrument license',
													'Adding Workstation package (SE, DE, WSO, WSS,WE)',
													'Adding optional add-ons',
													'Adding a contract'
												],
				'Converting / Upgrading Instrument licences':['Add Class 2/3 Instrument Licence'],
				'Merging license keys':['Only available for Enterprise']
		};
		$scope.selected_option = '7.x to 7.x+1 upgrade';

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
		$scope.existing_result = [
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];

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
											'Clients':{'value':3},
											'TF':{'value':12},
											'GC':{'value':12},
											'LC':{'value':6},
											'Total':{'value':12},
											'Data':{'value':999999},
											'Total_Clients':{'value':999999},
											'License':{'value':1}
											},
								'parts':[
												{'QTY':'Clients','PN':'7200.0201','DESC':'WE (Workgroup Edition)','NOTES':'test'},
												{'QTY':'GC','PN':'7000.0002','DESC':'3rd party GC for WE','NOTES':'test'},
												{'QTY':'LC','PN':'7000.0003','DESC':'3rd party LC for WE','NOTES':'test'},
												{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test'},
												{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test'}
												]
								}

						];

		$scope.new_options_2 = [
								{
								'max':{
											'Clients':{'value':999999},
											'TF':{'value':999999},
											'GC':{'value':999999},
											'LC':{'value':999999},
											'Total':{'value':999999},
											'Data':{'value':999999},
											'Total_Clients':{'value':999999},
											'License':{'value':1}
											},
								'parts':[
												{'QTY':'Total_Clients','PN':'7200.0300','DESC':'Enterprise Client','NOTES':'test'},
												{'QTY':'TF','PN':'7200.1000','DESC':'Class 3 Instrument license','NOTES':'test2'},
												{'QTY':'GC','PN':'7200.1002','DESC':'Class 2 Instrument license','NOTES':'test3'},
												{'QTY':'LC','PN':'7200.1003','DESC':'Class 1 Instrument license','NOTES':'test3'},
												{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test'}
												]
								}
						];

		$scope.existing_options = {
					'Single':{
							'7.x to 7.x+1 upgrade':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Upgrade with support contracts':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'6.8 to 7.2':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding Remote Data Client for data reprocessing':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding Client license':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding Instrument license':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding Workstation package (SE, DE, WSO, WSS,WE)':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding optional add-ons':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding a contract':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Add Class 2/3 Instrument Licence':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Only available for Enterprise':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
											]
									},
					'Workgroup':{
							'7.x to 7.x+1 upgrade':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Upgrade with support contracts':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'6.8 to 7.2':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding Remote Data Client for data reprocessing':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding Client license':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding Instrument license':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding Workstation package (SE, DE, WSO, WSS,WE)':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding optional add-ons':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Adding a contract':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Add Class 2/3 Instrument Licence':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
										],
							'Only available for Enterprise':[
											{'QTY':'Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
											{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
											{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
											]
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

			var TF = parseInt($scope.new_values['TF']['value']) || 0;
			var GC = parseInt($scope.new_values['GC']['value']) || 0;
			var LC = parseInt($scope.new_values['LC']['value']) || 0;
			$scope.new_values['Total']['value'] = TF + GC + LC;

			var Clients = parseInt($scope.new_values['Clients']['value']) || 0;
			var Data = parseInt($scope.new_values['Data']['value']) || 0;
			$scope.new_values['Total_Clients']['value'] = Clients + Data;

			$scope.new_options_1[1]['max']['TF'].value = parseInt($scope.new_values['Clients'].value) * 4;
			$scope.new_options_1[1]['max']['GC'].value = parseInt($scope.new_values['Clients'].value) * 4;
			$scope.new_options_1[1]['max']['LC'].value = parseInt($scope.new_values['Clients'].value) * 2;
			$scope.new_options_1[1]['max']['Total'].value = parseInt($scope.new_values['Clients'].value) * 4;

			$scope.new_result_1 = [];
			$scope.new_result_2 = [];

			// Part 1
			for (var i = 0; i < $scope.new_options_1.length; i++){
				$scope.new_valid = true;
				for (k in $scope.new_values){
						if( parseInt($scope.new_values[k].value) > $scope.new_options_1[i]['max'][k].value){
								$scope.new_valid = false;
						}
				}
				if($scope.new_valid){
					for (var j = 0; j < $scope.new_options_1[i]['parts'].length; j++){
						var QTY = parseInt($scope.new_values[$scope.new_options_1[i]['parts'][j]['QTY']].value) || 0;
						if (QTY) {
							$scope.new_result_1.push(
								{
									'QTY':QTY,
									'PN':$scope.new_options_1[i]['parts'][j]['PN'],
									'DESC':$scope.new_options_1[i]['parts'][j]['DESC'],
									'NOTES':$scope.new_options_1[i]['parts'][j]['NOTES']
								}
							);
						}

					}
					break;
				}
			}

			if(!$scope.new_valid){
				for (var j = 0; j < 3; j++){
					$scope.new_result_1.push({'QTY':'_','PN':'_','DESC':'_MAX_QTY_EXCEEDED_','NOTES':'_'});
				}
			}

			// Part 2
			$scope.new_valid = true;
			for (k in $scope.new_values){
					if( parseInt($scope.new_values[k].value) > $scope.new_options_2[0]['max'][k].value){
							$scope.new_valid = false;
					}
			}
			if($scope.new_valid){
				for (var j = 0; j < $scope.new_options_2[0]['parts'].length; j++){
					var QTY = parseInt($scope.new_values[$scope.new_options_2[0]['parts'][j]['QTY']].value) || 0;
					if (QTY) {
						$scope.new_result_2.push(
							{
								'QTY':QTY,
								'PN':$scope.new_options_2[0]['parts'][j]['PN'],
								'DESC':$scope.new_options_2[0]['parts'][j]['DESC'],
								'NOTES':$scope.new_options_2[0]['parts'][j]['NOTES']
							}
						);
					}

				}
			} else {
				for (var j = 0; j < 3; j++){
					$scope.new_result_2.push({'QTY':'_','PN':'_','DESC':'_MAX_QTY_EXCEEDED_','NOTES':'_'});
				}
			}

		};

		$scope.update_installation_type = function() {
			if ($scope.selected_installation == 'Existing SE/WE') {
					$scope.existing_values['WE_Packages']['show'] = true;
					$scope.existing_values['Controllers']['show'] = false;
				// alert('SE/WE');
			}
			else if ($scope.selected_installation == 'Existing a-la-carte') {
					$scope.existing_values['WE_Packages']['show'] = false;
					$scope.existing_values['Controllers']['show'] = true;
				// alert('a-la-carte');
			}
			else {
					$scope.existing_values['WE_Packages']['show'] = false;
					$scope.existing_values['Controllers']['show'] = false;
				// alert('other');
			}

		};

		$scope.update_category = function() {
			$scope.selected_option = $scope.modification_options[$scope.selected_category][0];


		};

		$scope.update_existing = function() {
			alert("update exist");
		};

		$scope.new_section = "hidden";
		$scope.existing_section = "hidden";

	}]);

	app.controller('to-do', ['$scope', function($scope) {
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

		$scope.showExisting = function() {};

		$scope.removeCompleted = function() {
			for (var i = $scope.todos.length - 1; i >= 0; i--){
			    if( $scope.todos[i].done === true){
			        $scope.todos[i].text = "done";
			        $scope.todos.splice(i,1);
			    }
			}
		};

	}]);
