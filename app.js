var app = angular.module('CDS-config-app', []);
	app.controller('configurator', function($scope) {
		$scope.todos = [ {text:'Learn AngularJS', done:true},
								{text:'build a single page AngularJS app', done:false}];
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
	});
