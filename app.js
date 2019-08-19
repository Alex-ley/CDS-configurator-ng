var app = angular.module('CDS-config-app', ['ui.bootstrap']);
	//camel cased directive name
	//in your HTML, this will be named as v-bars-chart
	// app.directive('myCustomSvg', ['$parse', function ($parse) {
	// 	//explicitly creating a directive definition variable
	// 	//this may look verbose but is good for clarification purposes
	// 	//in real life you'd want to simply return the object {...}
	// 	var directiveDefinitionObject = {
	// 			//We restrict its use to an element
	// 			//as usually  <bars-chart> is semantically
	// 			//more understandable
	// 			restrict: 'E',
	// 			templateNamespace:'svg',
	// 			//this is important,
	// 			//we don't want to overwrite our directive declaration
	// 			//in the HTML mark-up,
	// 			// template: '<div id="test"></div>',
	// 			templateUrl: 'SE_WE_v2.svg', //'svg.html',
	// 			replace: true,
	// 			//our data source would be an array
	// 			//passed thru chart-data attribute
	// 			scope: {svgClass: '='},
	//
	// 			}
	// 	 return directiveDefinitionObject;
	// }]);

	app.controller('configurator', ['$scope', '$http', function($scope, $http) {
		$scope.new_valid = false; //Workstation
		$scope.new_valid2 = false; //Enterprise
		$scope.new_values = {
								'Packages':{'valid':'','small':'','text':'Packages on license key','value':1, 'disabled':false, 'show':false},
								'TF':{'valid':'','small':'','text':'Thermo Fisher Instruments','value':1, 'disabled':false, 'show':true},
								'GC':{'valid':'','small':'','text':'3rd Party GC Instruments','value':0, 'disabled':false, 'show':true},
								'LC':{'valid':'','small':'','text':'3rd Party LC Instruments','value':0, 'disabled':false, 'show':true},
								'Total':{'valid':'','small':'','text':'Total Instruments','value':1, 'disabled':true, 'show':true},
								'Clients':{'valid':'','small':'','text':'Instrument PC Clients','value':1, 'disabled':false, 'show':true},
								'Data':{'valid':'','small':'','text':'Remote Data Clients','value':0, 'disabled':false, 'show':true},
								'Total_Clients':{'valid':'','small':'','text':'Total Clients','value':1, 'disabled':false, 'show':false},
								'License':{'valid':'','small':'','text':'License key','value':1, 'disabled':false, 'show':false},
								'Max_Instruments_Clients':{'valid':'','small':'','text':'Max of instruments / clients','value':1, 'disabled':false, 'show':false}
							};
		$scope.existing_valid = false;
		$scope.existing_values = {
								'Packages':{'valid':'','small':'','text':'Packages on license key','value':1, 'disabled':false, 'show':true},
								'WE_Packages':{'valid':'','small':'','text':'WE Packages on license key','value':1, 'disabled':false, 'show':false},
								'Controllers':{'valid':'','small':'','text':'Instrument Controllers','value':1, 'disabled':false, 'show':false},
								'Clients':{'valid':'','small':'','text':'Instrument PC Clients','value':1, 'disabled':false, 'show':true},
								'TF':{'valid':'','small':'','text':'Thermo Fisher Instruments','value':1, 'disabled':false, 'show':true},
								'GC':{'valid':'','small':'','text':'3rd Party GC Instruments','value':0, 'disabled':false, 'show':true},
								'LC':{'valid':'','small':'','text':'3rd Party LC Instruments','value':0, 'disabled':false, 'show':true},
								'Total':{'valid':'','small':'','text':'Total Instruments','value':1, 'disabled':true, 'show':true},
								'Data':{'valid':'','small':'','text':'Remote Data Clients','value':0, 'disabled':false, 'show':true},
								'Total_Clients':{'valid':'','small':'','text':'Total Clients','value':1, 'disabled':false, 'show':false},
								'License':{'valid':'','small':'','text':'License key','value':1, 'disabled':false, 'show':false},
								'Max_Controllers_Clients':{'valid':'','small':'','text':'Max of controllers / clients','value':1, 'disabled':false, 'show':false},
								'Max_Instruments_Clients':{'valid':'','small':'','text':'Max of instruments / clients','value':1, 'disabled':false, 'show':false}
							};
		$scope.new_WE = [
			{'active': true, 'svgClass':"svg_TF"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused", 'extra':0},
			{'active': false, 'svgClass':"svg_unused", 'extra':0},
			{'active': false, 'svgClass':"svg_unused", 'extra':0},
			{'active': false, 'svgClass':"svg_unused", 'extra':0},
			{'active': false, 'svgClass':"svg_unused", 'extra':0}
		];

		$scope.tabs_information = {
			'new':[
					{'id': 0, 'name': 'Part 1', 'show': true, 'active': true, 'tabClass':"nav-item nav-link active"},
					{'id': 1, 'name': 'Part 2', 'show': true, 'active': false, 'tabClass':"nav-item nav-link"},
					{'id': 2, 'name': 'Part 3', 'show': true, 'active': false, 'tabClass':"nav-item nav-link"},
					{'id': 3, 'name': 'Part 4', 'show': false, 'active': false, 'tabClass':"nav-item nav-link disabled"}
		  ],
			'new_chosen': 'Please select Option 1 or 2',
			'new_chosen_style' : 'red',
			'new_chosen_type': '',
			'existing':[
					{'id': 0, 'name': 'Part 1', 'show': true, 'active': true, 'tabClass':"nav-item nav-link active"},
					{'id': 1, 'name': 'Part 2', 'show': true, 'active': false, 'tabClass':"nav-item nav-link"},
					{'id': 2, 'name': 'Part 3', 'show': true, 'active': false, 'tabClass':"nav-item nav-link"},
					{'id': 3, 'name': 'Part 4', 'show': false, 'active': false, 'tabClass':"nav-item nav-link disabled"}
		  ]
	  };

		$scope.new_enterprise = {
			'inst': [1],
			'IPC': [1]
		}

		$scope.new_section = {'show':false,'class':'btn btn-outline-primary'};
		$scope.new_bottom = {'show':true,'class':'tbc'};
		$scope.existing_section = {'show':false,'class':'btn btn-outline-primary'};
		$scope.existing_validation = {'style':'','text':''};
		$scope.new_add_ons_validation = {'style':'','text':''};

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
		$scope.new_result_chosen = [
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];
		$scope.new_add_ons = [
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];
		$scope.new_add_ons_included = [];
		$scope.new_final = [
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];
		$scope.existing_result = [
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];
		$scope.existing_result_chosen = [
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'Valid':'','MAX':0,'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];
		$scope.existing_included = [];
		$scope.existing_final = [
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];

		$scope.current_new_options_1 = {
			'valid' : true,
			'name' : 'Single Edition',
			'Edition_visible' : [1,0],
			'IPC_visible' : [1,0,0]
		}
		$scope.new_options_1 = [
								{
								'name':'1 x Single Edition',
								'max':{
											'Packages':{'value':1},
											'Clients':{'value':1},
											'TF':{'value':1},
											'GC':{'value':0},
											'LC':{'value':0},
											'Total':{'value':1},
											'Data':{'value':999999},
											'Total_Clients':{'value':999999},
											'License':{'value':1},
											'Max_Instruments_Clients':{'value':1}
											},
								'parts':[
												{'QTY':'Max_Instruments_Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'test'},
												{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'test2'},
												{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test3'}
												]
								},

								{
								'name':'2 x Single Edition',
								'max':{
											'Packages':{'value':1},
											'Clients':{'value':2},
											'TF':{'value':2},
											'GC':{'value':0},
											'LC':{'value':0},
											'Total':{'value':2},
											'Data':{'value':999999},
											'Total_Clients':{'value':999999},
											'License':{'value':1},
											'Max_Instruments_Clients':{'value':2}
											},
								'parts':[
												{'QTY':'Max_Instruments_Clients','PN':'7100.0108','DESC':'SE (Single Edition)','NOTES':'testy'},
												{'QTY':'Data','PN':'7200.0030','DESC':'Remote Data Client','NOTES':'testy2'},
												{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'testy3'}
												]
								},

								{
								'name':'Workgroup Edition',
								'max':{
											'Packages':{'value':1},
											'Clients':{'value':3},
											'TF':{'value':12},
											'GC':{'value':12},
											'LC':{'value':6},
											'Total':{'value':12},
											'Data':{'value':999999},
											'Total_Clients':{'value':999999},
											'License':{'value':1},
											'Max_Instruments_Clients':{'value':12}
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
											'Packages':{'value':1},
											'Clients':{'value':999999},
											'TF':{'value':999999},
											'GC':{'value':999999},
											'LC':{'value':999999},
											'Total':{'value':999999},
											'Data':{'value':999999},
											'Total_Clients':{'value':999999},
											'License':{'value':1},
											'Max_Instruments_Clients':{'value':999999}
											},
								'parts':[
												{'QTY':'Total_Clients','PN':'7200.0300','DESC':'Enterprise Client','NOTES':'test'},
												{'QTY':'TF','PN':'7200.1000','DESC':'Class 1 Instrument license','NOTES':'test2'},
												{'QTY':'GC','PN':'7200.1002','DESC':'Class 2 Instrument license','NOTES':'test3'},
												{'QTY':'LC','PN':'7200.1003','DESC':'Class 3 Instrument license','NOTES':'test3'},
												{'QTY':'License','PN':'7050.0104A','DESC':'CM7 License key - New','NOTES':'test'}
												]
								}
						];

		$http.get('existing_options.json').then(function(response){
			console.log('fetch succesful');
			// console.log(response.data);
			$scope.existing_options = response.data;
		},function(error){
			console.log('fetch error');
			console.log(error);
		});

		$scope.new_installation = function() {
			// alert("new");
			if ($scope.new_section.show == false) {
				$scope.new_section.show = true;
				$scope.new_section.class = 'btn btn-primary';
				$scope.existing_section.show = false;
				$scope.existing_section.class = 'btn btn-outline-primary';
			}
		};

		$scope.existing_installation = function() {
			// alert("existing");
			if ($scope.existing_section.show == false) {
				$scope.existing_section.show = true;
				$scope.existing_section.class = 'btn btn-primary';
				$scope.new_section.show = false;
				$scope.new_section.class = 'btn btn-outline-primary';
			}
		};

		$scope.update_new = function(key) {
			// alert("update new");
			$scope.new_bottom.show = true;
			$scope.new_valid = true;
			$scope.new_valid2 = true;
			// Part 1
			const part_1 = function(){
				var TF = parseInt($scope.new_values['TF']['value']) || 0;
				var GC = parseInt($scope.new_values['GC']['value']) || 0;
				var LC = parseInt($scope.new_values['LC']['value']) || 0;
				var Total = TF + GC + LC;
				$scope.new_values['Total']['value'] = Total;

				var Clients = parseInt($scope.new_values['Clients']['value']) || 1;
				var Data = parseInt($scope.new_values['Data']['value']) || 0;
				$scope.new_values['Total_Clients']['value'] = Clients + Data;
				$scope.new_values['Max_Instruments_Clients']['value'] = Math.max(Clients, Total, 1);

				$scope.new_options_1[2]['max']['TF'].value = Clients * 4;
				$scope.new_options_1[2]['max']['GC'].value = Clients * 4;
				$scope.new_options_1[2]['max']['LC'].value = Clients * 2;
				$scope.new_options_1[2]['max']['Total'].value = Clients * 4;
				$scope.new_options_1[2]['name'] = Clients + ' x Workgroup Edition';

				$scope.new_result_1 = [];
				$scope.new_result_2 = [];

				for (var i = 0; i < $scope.new_options_1.length; i++){
					$scope.new_valid = true;
					for (k in $scope.new_values){
							if( parseInt($scope.new_values[k].value) > $scope.new_options_1[i]['max'][k].value){
									$scope.new_valid = false;
									// console.log(i,k);
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
						$scope.current_new_options_1.name = $scope.new_options_1[i].name;
						i > 1 ? $scope.current_new_options_1.Edition_visible = [0,1] : $scope.current_new_options_1.Edition_visible = [1,0];
						break; //break the outer for loop as valid result was found
					}
				}
			};

			if (key !== 'Clients') {
				// console.log(key);
				for (var c = 1; c <= 3; c++) {
						// console.log(c);
						$scope.new_values['Clients'].value = c;
						$scope.new_values['Clients'].small = "Auto-calculated";
						$scope.new_values['Clients'].valid = "is-valid";
						part_1();
					if ($scope.new_valid == true) {
						if ($scope.new_values['Total'].value == 2 & $scope.new_values['TF'].value == 2) {
							$scope.new_values['Clients'].value = 2;
							$scope.new_WE[1].active = true;
							$scope.new_WE[1].svgClass = 'svg_TF';
						}
						$scope.new_enterprise['IPC'] = [];
						for (var ipc = 1; ipc <= c; ipc++) {
							$scope.new_enterprise['IPC'].push(ipc);
						}
						break;
					}
				}
			}
			else {
				$scope.new_values['Clients'].small = "Manually entered";
				$scope.new_values['Clients'].valid = "";
				part_1(); //the user deliberately changed the clients value so don't force it to fit
			}

			$scope.current_new_options_1.IPC_visible = [1,0,0];
			$scope.new_enterprise['IPC'] = [];
			$scope.new_WE[16].extra = 0;
			for (var n = 0; n < $scope.new_values['Clients'].value; n++) {
				$scope.current_new_options_1.IPC_visible[n] = 1;
				n < 4 ? $scope.new_enterprise['IPC'].push(n+1) : null;
				n >= 3 ? $scope.new_WE[16].extra +=1 : null;
			}
			$scope.new_enterprise['IPC'][0] = 1;

			if(!$scope.new_valid){
				if (key !== 'Clients') {
					$scope.new_values['Clients'].value = 4;  //at least 4 IPC required
					$scope.new_values['Total_Clients'].value = 4 + $scope.new_values['Data'].value;
					$scope.new_enterprise['IPC'] = [1,2,3,4];
					$scope.new_WE[16].extra = 1;
				}
				$scope.new_values['Clients'].small += " - option 2 invalid"
				$scope.new_values['Clients'].valid = "is-invalid";
				$scope.new_bottom.show = false;
				$scope.current_new_options_1.name = "Quantity Exceeded";
				for (var j = 0; j < 3; j++){
					$scope.new_result_1.push({'QTY':'_','PN':'_','DESC':'_MAX_QTY_EXCEEDED_','NOTES':'_'});
				}
				var temp_enterprise = {
					'svg_TF': $scope.new_values['TF'].value,
					'svg_GC': $scope.new_values['GC'].value,
					'svg_LC': $scope.new_values['LC'].value
				}
				$scope.new_enterprise['inst'] = [];
				const limit = (key !== 'Clients' ? 12 : Math.min($scope.new_values['Total'].value,12)); //either go to 12 or total instruments if less
				var counter = 0;
				var incrementer = 0;
				while (counter < limit) { //allocate each instrument to a slot taking turns
					if ((incrementer+3) % 3 == 0) {
						if (temp_enterprise['svg_TF']>0) {
							temp_enterprise['svg_TF'] -=1;
							$scope.new_WE[counter].active = true;
							$scope.new_WE[counter].svgClass = 'svg_TF';
							$scope.new_enterprise['inst'].push(counter+1);
							counter +=1;
							incrementer +=1;
							continue;
						}
					} else if ((incrementer+2) % 3 == 0){
						if (temp_enterprise['svg_GC']>0) {
							temp_enterprise['svg_GC'] -=1;
							$scope.new_WE[counter].active = true;
							$scope.new_WE[counter].svgClass = 'svg_GC';
							$scope.new_enterprise['inst'].push(counter+1);
							counter +=1;
							incrementer +=1;
							continue;
						}
					} else {
						if (temp_enterprise['svg_LC']>0) {
							temp_enterprise['svg_LC'] -=1;
							$scope.new_WE[counter].active = true;
							$scope.new_WE[counter].svgClass = 'svg_LC';
							$scope.new_enterprise['inst'].push(counter+1);
							counter +=1;
							incrementer +=1;
							continue;
						}
					}
					incrementer +=1;
				}
				if (temp_enterprise['svg_TF']>0) { //any remaining instruments save in spillover holders
					var instruments = $scope.new_enterprise['inst'].length;
					$scope.new_WE[instruments].active = true;
					$scope.new_WE[instruments].svgClass = 'svg_TF';
					$scope.new_WE[instruments].extra = temp_enterprise['svg_TF'];
					$scope.new_enterprise['inst'].push(instruments+1);
				}
				if (temp_enterprise['svg_GC']>0) {
					var instruments = $scope.new_enterprise['inst'].length;
					$scope.new_WE[instruments].active = true;
					$scope.new_WE[instruments].svgClass = 'svg_GC';
					$scope.new_WE[instruments].extra = temp_enterprise['svg_GC'];
					$scope.new_enterprise['inst'].push(instruments+1);
				}
				if (temp_enterprise['svg_LC']>0) {
					var instruments = $scope.new_enterprise['inst'].length;
					$scope.new_WE[instruments].active = true;
					$scope.new_WE[instruments].svgClass = 'svg_LC';
					$scope.new_WE[instruments].extra = temp_enterprise['svg_LC'];
					$scope.new_enterprise['inst'].push(instruments+1);
				}
			} else {
				for (var i = 0; i < $scope.new_WE.length; i++) {
					$scope.new_WE[i].active = false;
					$scope.new_WE[i].svgClass = 'svg_unused';
				}
				$scope.new_WE[0].svgClass = 'svg_TF';
				$scope.new_enterprise['inst'] = [];
				var counter = 0;
				for (var i = 0; i < $scope.new_values['LC'].value; i++) {
					$scope.new_WE[counter].active = true;
					$scope.new_WE[counter].svgClass = 'svg_LC';
					$scope.new_enterprise['inst'].push(i+1);
					if ((i+1) % 2 == 0) {
						counter += 3;
					} else {
						counter += 1;
					}
				}
				for (var i = 0; i < $scope.new_values['GC'].value; i++) {
					for (var j = 0; j < 12; j++) {
						if ($scope.new_WE[j].active == false) {
							$scope.new_WE[j].active = true;
							$scope.new_WE[j].svgClass = 'svg_GC';
							$scope.new_enterprise['inst'].push(i+1);
							break; //break inner-loop each time you find a slot free
						}
					}
				}
				for (var i = 0; i < $scope.new_values['TF'].value; i++) {
					for (var j = 0; j < 12; j++) {
						if ($scope.new_WE[j].active == false) {
							$scope.new_WE[j].active = true;
							$scope.new_WE[j].svgClass = 'svg_TF';
							$scope.new_enterprise['inst'].push(i+1);
							break; //break inner-loop each time you find a slot free
						}
					}
				}
			}

			// Part 2
			$scope.new_valid2 = true;
			for (k in $scope.new_values){
					if( parseInt($scope.new_values[k].value) > $scope.new_options_2[0]['max'][k].value){
							$scope.new_valid2 = false;
					}
			}
			if($scope.new_valid2){
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
					$scope.new_valid2 = false;
					$scope.new_result_2.push({'QTY':'_','PN':'_','DESC':'_MAX_QTY_EXCEEDED_','NOTES':'_'});
				}
			}

		};

		$scope.update_installation_type = function() {
			$scope.existing_included =[];
			$scope.existing_valid = true;
			$scope.show_hide_existing();
			$scope.update_existing_result();
			var calc_qty = true;
			$scope.update_quantities_result(calc_qty);
			$scope.check_existing_validity();
		};

		$scope.update_existing = function() {
			$scope.existing_included =[];
			$scope.existing_valid = true;
			$scope.update_existing_result();
			var calc_qty = true;
			$scope.update_quantities_result(calc_qty);
			$scope.check_existing_validity();
		};

		$scope.update_category = function() {
			$scope.existing_valid = true;
			$scope.selected_option = $scope.modification_options[$scope.selected_category][0];
			$scope.update_existing();
		};

		$scope.show_hide_existing = function() {
			if ($scope.selected_installation == 'Existing SE/WE') {
					$scope.existing_values['WE_Packages']['show'] = true;
					$scope.existing_values['Controllers']['show'] = false;
					$scope.existing_values['Data']['show'] = true;
				// alert('SE/WE');
			}
			else if ($scope.selected_installation == 'Existing a-la-carte') {
					$scope.existing_values['WE_Packages']['show'] = false;
					$scope.existing_values['Controllers']['show'] = true;
					$scope.existing_values['Data']['show'] = true;
				// alert('a-la-carte');
			}
			else if ($scope.selected_installation == 'Enterprise') {
					$scope.existing_values['Data']['show'] = false;
					// $scope.existing_values['Data']['value'] = 0;
				// alert('a-la-carte');
			}
			else {
					$scope.existing_values['WE_Packages']['show'] = false;
					$scope.existing_values['Controllers']['show'] = false;
					$scope.existing_values['Data']['show'] = true;
				// alert('other');
			}
		};

		$scope.update_existing_result = function() {
			// alert("update exist");
			var TF = parseInt($scope.existing_values['TF']['value']) || 0;
			var GC = parseInt($scope.existing_values['GC']['value']) || 0;
			var LC = parseInt($scope.existing_values['LC']['value']) || 0;
			$scope.existing_values['Total']['value'] = TF + GC + LC;

			var Clients = parseInt($scope.existing_values['Clients']['value']) || 0;
			var Data = parseInt($scope.existing_values['Data']['value']) || 0;
			$scope.existing_values['Total_Clients']['value'] = Clients + Data;

			var Controllers = parseInt($scope.existing_values['Controllers']['value']) || 0;
			var Total_Clients = parseInt($scope.existing_values['Total_Clients']['value']) || 0;
			$scope.existing_values['Max_Controllers_Clients']['value'] = Math.max(Controllers,Total_Clients);

			var Instruments = parseInt($scope.existing_values['Total']['value']) || 0;
			$scope.existing_values['Max_Instruments_Clients']['value'] = Math.max(Instruments,Clients); //Total_Clients

		};

		$scope.update_quantities_result = function(calc_qty, new_or_existing = 'existing') {
			// $scope.existing_result = [];
			// Existing Part (only 1)
			if (new_or_existing == 'new' && !$scope.new_valid) {
				return false;
			} else if (new_or_existing == 'existing' && !$scope.existing_valid) {
				return false;
			} else if (new_or_existing == 'existing') {
				var parts_array = $scope.existing_options[$scope.selected_installation][$scope.selected_option];
				var new_or_existing_values = 'existing_values';
				var new_or_existing_result = 'existing_result';
				var new_or_existing_included = 'existing_included';
				var new_or_existing_validation = 'existing_validation';
			}
			else { //new_or_existing = 'new'
				var parts_array = $scope.existing_options[$scope.tabs_information['new_chosen_type']]['Adding optional add-ons'];
				var new_or_existing_values = 'new_values';
				var new_or_existing_result = 'new_add_ons';
				var new_or_existing_included = 'new_add_ons_included';
				var new_or_existing_validation = 'new_add_ons_validation';
			}
			// // alert(parts_array[0]['QTY']);
			// $scope.existing_result = parts_array;
			if (calc_qty) {
				// $scope[new_or_existing_result] = parts_array;
				for (var j = 0; j < parts_array.length; j++){
					var lookup_qty = parts_array[j]['QTY'];
					// console.log(lookup_qty, calc_qty);
					// alert(lookup_qty);
					if (!parseInt(lookup_qty) > 0) {
						var qty = parseInt($scope[new_or_existing_values][lookup_qty]['value']) || 1; 	// no need for scope ($scope.parts_array[lookup_qty]);
						parts_array[j]['QTY'] = qty;
					}
				}
				$scope[new_or_existing_result] = [];
				$scope[new_or_existing_included] =[];
				for (var i = 0; i < parts_array.length; i++) {
					if (parts_array[i].PN == "included") {
						$scope[new_or_existing_included].push(parts_array[i]);
					} else {
						$scope[new_or_existing_result].push(parts_array[i]);
					}
				}
			}
			// $scope.existing_valid = true;
			$scope[new_or_existing_validation] = {'style':'green','text':'Quantities are valid, please edit for your needs'};
			for (var j = 0; j < [new_or_existing_result].length; j++) {
				var qty = parseInt($scope[new_or_existing_result][j]['QTY']) || 0;
				var max = parseInt($scope[new_or_existing_result][j]['MAX']);
				// console.log(qty,max);
				if(qty > max){
					$scope[new_or_existing_result][j]['Valid'] = 'is-invalid';
					// $scope.existing_valid = false;
					$scope[new_or_existing_validation] = {'style':'red','text':'Max quantity exceeded, please adjust'};
				}else {
					// console.log($scope.existing_result);
					$scope[new_or_existing_result][j]['Valid'] = 'is-valid';
				}
			}
			// $scope.existing_result = parts_array;
			// console.log(parts_array);
			// if (parts_array[j]['QTY'] > 0) {
			// 	parts_array[j]['QTY'] = qty;
			// }
		};

		$scope.check_existing_validity = function() {
			$scope.existing_options['Workgroup']['max']['TF'].value = parseInt($scope.existing_values['Clients'].value) * 4;
			$scope.existing_options['Workgroup']['max']['GC'].value = parseInt($scope.existing_values['Clients'].value) * 4;
			$scope.existing_options['Workgroup']['max']['LC'].value = parseInt($scope.existing_values['Clients'].value) * 2;
			$scope.existing_options['Workgroup']['max']['Total'].value = parseInt($scope.existing_values['Clients'].value) * 4;

			for (k in $scope.existing_options[$scope.selected_installation]['max']) {
				if ($scope.existing_values[k].value > $scope.existing_options[$scope.selected_installation]['max'][k].value) {
					$scope.existing_values[k]['valid'] = 'is-invalid';
					$scope.existing_values[k]['small'] = 'max. qty exceeded';
				}else {
					$scope.existing_values[k]['valid'] = '';
					$scope.existing_values[k]['small'] = '';
				}
			}
		};

		$scope.new_tab = function(new_or_existing, tab) {
			// console.log(tab);
			var temp = $scope.tabs_information[new_or_existing][parseInt(tab)].tabClass.split(" ");
			if (temp[temp.length-1] == "disabled") {

			}
			else {
				for (var i = 0; i < $scope.tabs_information[new_or_existing].length; i++) {
					temp = $scope.tabs_information[new_or_existing][i].tabClass.split(" ");
					if (i == parseInt(tab)) {
						$scope.tabs_information[new_or_existing][i].tabClass = "nav-item nav-link active";
						$scope.tabs_information[new_or_existing][i].active = true;
					}
					else if (temp[temp.length-1] == "disabled") {

					}
					else {
						$scope.tabs_information[new_or_existing][i].tabClass = "nav-item nav-link";
						$scope.tabs_information[new_or_existing][i].active = false;
					}
				}
			}
		};

		$scope.option_selected = function(option_chosen, new_or_existing, tab) {
			if (new_or_existing == 'new'){
				if (!$scope.new_valid && !$scope.new_valid2) { return false;	}
				$scope.new_add_ons_included =[];
				$scope.tabs_information['new_chosen'] = option_chosen;
				var temp = $scope.current_new_options_1.name.split(" ");
				$scope.tabs_information['new_chosen_type'] = (option_chosen == "Option 1" ? "Enterprise" : temp[2]);
				$scope.tabs_information.new_chosen_style = 'green';
				var temp = (option_chosen == "Option 2" ? $scope.new_result_1 : $scope.new_result_2);
				// console.log(temp);
				$scope.new_result_chosen = temp;
			} else {
				if (!$scope.existing_valid) { return false;	}
				console.log('move existing to part 2');
				$scope.existing_result_chosen = $scope.existing_result;
			}
			$scope.new_tab(new_or_existing, tab);
			$scope.update_quantities_result(true, 'new');
		};

		$scope.removeItem = function(array_to_delete,index) {
			console.log(array_to_delete,index);
			$scope[array_to_delete].splice(index,1);
		};

		$scope.remove_all_add_ons = function(new_or_existing) {
			var new_or_existing_result = (new_or_existing == 'new' ? 'new_add_ons' : 'existing_result');
			$scope[new_or_existing_result] = [];
		};

		$scope.send_to_final = function(new_or_existing, tab) {
			if (new_or_existing == 'new') {
				$scope['new_final'] = $scope['new_result_chosen'];
				// for (var i = 0; i < $scope['new_add_ons'].length; i++) {
				// 	$scope['new_final'].push($scope['new_add_ons'][i]);
				// }
				$scope['new_final'] = $scope['new_final'].concat($scope['new_add_ons']);
			} else {
				$scope['existing_final'] = $scope['existing_result'];
			}
			$scope.new_tab(new_or_existing, tab);
		};

		$scope.export_as_csv = function(new_or_existing) {
			var todayDate = new Date().toISOString().slice(0,10);
			console.log('export_as_csv',todayDate);
			if (new_or_existing == 'new') {
				var new_or_existing_final = 'new_final';
				var filename_prefix = 'new_CDS_installation_'
			} else {
				var new_or_existing_final = 'existing_final';
				var filename_prefix = 'existing_CDS_installation_'
			}
			var headers_to_export = ['QTY','PN','DESC','NOTES'];
			var rows_to_export = [['QTY','PN','DESC','NOTES']];
			for (var i = 0; i < $scope[new_or_existing_final].length; i++) {
				var current_row = [];
				for (var j = 0; j < headers_to_export.length; j++) {
					current_row.push($scope[new_or_existing_final][i][headers_to_export[j]]);
				}
				rows_to_export.push(current_row);
			}
			$scope.export_to_csv(filename_prefix + todayDate + '.csv',rows_to_export);
		};

		$scope.export_to_csv = function(filename, rows) {
	    var processRow = function (row) {
	        var finalVal = '';
	        for (var j = 0; j < row.length; j++) {
	            var innerValue = row[j] === null ? '' : row[j].toString();
	            if (row[j] instanceof Date) {
	                innerValue = row[j].toLocaleString();
	            };
	            var result = innerValue.replace(/"/g, '""');
	            if (result.search(/("|,|\n)/g) >= 0)
	                result = '"' + result + '"';
	            if (j > 0)
	                finalVal += ',';
	            finalVal += result;
	        }
	        return finalVal + '\n';
	    };

	    var csvFile = '';
	    for (var i = 0; i < rows.length; i++) {
	        csvFile += processRow(rows[i]);
	    }

	    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
	    if (navigator.msSaveBlob) { // IE 10+
	        navigator.msSaveBlob(blob, filename);
	    } else {
	        var link = document.createElement("a");
	        if (link.download !== undefined) { // feature detection
	            // Browsers that support HTML5 download attribute
	            var url = URL.createObjectURL(blob);
	            link.setAttribute("href", url);
	            link.setAttribute("download", filename);
	            link.style.visibility = 'hidden';
	            document.body.appendChild(link);
	            link.click();
	            document.body.removeChild(link);
	        } else {
						var encodedUri = 'data:attachment/csv;charset=utf-8,' + encodeURIComponent(csvFile);
						window.open(encodedUri);
	        }
	    }
		};

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
