var app = angular.module('CDS-config-app', []);
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

		$scope.new_values = {
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
			{'active': false, 'svgClass':"svg_LC"},
			{'active': false, 'svgClass':"svg_GC"},
			{'active': false, 'svgClass':"svg_TF"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"},
			{'active': false, 'svgClass':"svg_unused"}
		];

		$scope.tabs_information = {
			'new':[
					{'id': 0, 'name': 'Part 1', 'show': true, 'active': true, 'tabClass':"nav-item nav-link active"},
					{'id': 1, 'name': 'Part 2', 'show': true, 'active': false, 'tabClass':"nav-item nav-link"},
					{'id': 2, 'name': 'Part 3', 'show': true, 'active': false, 'tabClass':"nav-item nav-link"},
					{'id': 3, 'name': 'Part 4', 'show': false, 'active': false, 'tabClass':"nav-item nav-link disabled"}
		  ],
			'new_chosen': 'Please select Option 1 or 2',
			'existing':[
					{'id': 0, 'name': 'Part 1', 'show': true, 'active': true, 'tabClass':"nav-item nav-link active"},
					{'id': 1, 'name': 'Part 2', 'show': true, 'active': false, 'tabClass':"nav-item nav-link"},
					{'id': 2, 'name': 'Part 3', 'show': true, 'active': false, 'tabClass':"nav-item nav-link"},
					{'id': 3, 'name': 'Part 4', 'show': false, 'active': false, 'tabClass':"nav-item nav-link disabled"}
		  ]
	  };
		$scope.new_section = {'show':false,'class':'btn btn-outline-primary'};
		$scope.new_bottom = {'show':false,'class':'tbc'};
		$scope.existing_section = {'show':false,'class':'btn btn-outline-primary'};
		$scope.existing_validation = {'style':'','text':''};

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
		$scope.existing_result = [
			{'Valid':'','QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'Valid':'','QTY':'_','PN':'_','DESC':'_','NOTES':'_'},
			{'Valid':'','QTY':'_','PN':'_','DESC':'_','NOTES':'_'}
		];

		$scope.current_new_options_1 = {
			'name' : 'Single Edition',
			'Edition_visible' : [1,0],
			'IPC_visible' : [1,0,0]
		}
		$scope.new_options_1 = [
								{
								'name':'1 x Single Edition',
								'max':{
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

			$scope.current_new_options_1.IPC_visible = [0,0,0];
			for (var n = 0; n < $scope.new_values['Clients'].value; n++) {
				$scope.current_new_options_1.IPC_visible[n] = 1;
			}

			if(!$scope.new_valid){
				$scope.new_values['Clients'].small += " - option 2 invalid"
				$scope.new_values['Clients'].valid = "is-invalid";
				$scope.new_bottom.show = false;
				for (var j = 0; j < 3; j++){
					$scope.new_result_1.push({'QTY':'_','PN':'_','DESC':'_MAX_QTY_EXCEEDED_','NOTES':'_'});
				}
			} else {
				for (var i = 0; i < $scope.new_WE.length; i++) {
					$scope.new_WE[i].active = false;
					$scope.new_WE[i].svgClass = 'svg_unused';
				}
				var counter = 0;
				for (var i = 0; i < $scope.new_values['LC'].value; i++) {
					$scope.new_WE[counter].active = true;
					$scope.new_WE[counter].svgClass = 'svg_LC';
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
							break; //break inner-loop each time you find a slot free
						}
					}
				}
				for (var i = 0; i < $scope.new_values['TF'].value; i++) {
					for (var j = 0; j < 12; j++) {
						if ($scope.new_WE[j].active == false) {
							$scope.new_WE[j].active = true;
							$scope.new_WE[j].svgClass = 'svg_TF';
							break; //break inner-loop each time you find a slot free
						}
					}
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
			$scope.show_hide_existing();
			$scope.update_existing_result();
			var calc_qty = true;
			$scope.update_quantities_result(calc_qty);
			$scope.check_existing_validity();
		};

		$scope.update_existing = function() {
			$scope.update_existing_result();
			var calc_qty = true;
			$scope.update_quantities_result(calc_qty);
			$scope.check_existing_validity();
		};

		$scope.update_category = function() {
			$scope.selected_option = $scope.modification_options[$scope.selected_category][0];
			$scope.update_existing();
		};

		$scope.update_quantities = function() {
			var calc_qty = false;
			$scope.update_quantities_result(calc_qty);
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

		$scope.update_quantities_result = function(calc_qty) {
			// $scope.existing_result = [];
			// Existing Part (only 1)
			var parts_array = $scope.existing_options[$scope.selected_installation][$scope.selected_option];
			// // alert(parts_array[0]['QTY']);
			// $scope.existing_result = parts_array;
			$scope.existing_result = parts_array;
			$scope.existing_valid = true;
			$scope.existing_validation = {'style':'green','text':'Quantities are valid, please edit for your needs'};
			for (var j = 0; j < parts_array.length; j++){
					var lookup_qty = parts_array[j]['QTY'];
					// console.log(lookup_qty, calc_qty);
					// alert(lookup_qty);
					if (calc_qty) {
						if (parseInt(lookup_qty) > 0) {
							var qty = lookup_qty;
						}else {
							var qty = parseInt($scope.existing_values[lookup_qty]['value']) || 1; 	// no need for scope ($scope.parts_array[lookup_qty]);
							$scope.existing_result[j]['QTY'] = qty;
							var max = parseInt(parts_array[j]['MAX']); // no need for scope $scope.parts_array
						}
					}else {
						var qty = parseInt($scope.existing_result[j]['QTY']) || 0;
						var max = parseInt($scope.existing_result[j]['MAX']);
					}
					// console.log(qty,max);
					if(qty > max){
						$scope.existing_result[j]['Valid'] = 'is-invalid';
						$scope.existing_valid = false;
						$scope.existing_validation = {'style':'red','text':'Max quantity exceeded, please adjust'};
					}else {
						// console.log($scope.existing_result);
						$scope.existing_result[j]['Valid'] = 'is-valid';
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
			$scope.tabs_information['new_chosen'] = option_chosen;
			var temp = option_chosen == "Option 2" ? $scope.new_result_1 : $scope.new_result_2;
			// console.log(temp);
			$scope.new_result_chosen = temp;
			$scope.new_tab(new_or_existing, tab);
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
