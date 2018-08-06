var app = angular.module('CDS-config-app', []);
	app.controller('configurator', ['$scope', function($scope) {
		$scope.todos = [ {text:'Learn AngularJS', done:true},
								{text:'build a single page AngularJS app', done:false}];
		$scope.addTodo = function() {
			if($scope.todoText !== '') {
				$scope.todos.push({text:$scope.todoText, done:false});
				$scope.todoText = '';
			}
		};

		$scope.new_values = {
								'Instrument Clients':1,
								'Thermo Fisher Instruments':1,
								'3rd Party GC Instruments':0,
								'3rd Party LC Instruments':0,
								'Total Instruments':1,
								'Data Clients':2,
							};

		$scope.existing_values = {
								'Instrument Clients':2,
								'Thermo Fisher Instruments':1,
								'3rd Party GC Instruments':0,
								'3rd Party LC Instruments':0,
								'Total Instruments':1,
								'Data Clients':2,
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

		$scope.new_installation = function() {
			alert("new");
		};

		$scope.existing_installation = function() {
			alert("existing");
		};

		$scope.update_new = function() {
			alert("update new");
		};

		$scope.update_existing = function() {
			alert("update exist");
		};
	}]);
