angular.module('sagra')
	.controller('siteCtrl', function($scope, $stateParams, $state, Sites, $log) {
		$scope.site = angular.isDefined($stateParams.id) && $stateParams.id.length > 0 ? Sites[$stateParams.id] : {};
		$scope.submit = function(valid) {
			if(!valid) {
				return;
			}
			if($stateParams.id.length) {
				Sites[$stateParams.id] = $scope.site;
			} else {
				$scope.site.id = 1;
				Sites.push($scope.site);
			}
			$state.go('app.sites');

		}
	})
	.controller('sitesCtrl', function($scope, Sites) {
		$scope.sites = Sites;
		$scope.delete = function(id) {
			Sites.splice(id);
		}
	})
	.controller('mainCtrl', function($scope, $state, User, $log) {
		$scope.user = User;

		$scope.logout = function(){
			$scope.user =  {id: '0'};
		}

		$scope.$watch('user', function(newValue, oldValue) {
			$log.info(newValue);
			if(newValue.id == '0') {
				$state.go('app.login');
			}
		});
	})
	.controller('loginCtrl', function($scope, $state, User) {

		$scope.form = [];

		$scope.login = function(form) {
			User.id = form.name || 'not entered';
			$state.go('app.sites');
		};
	});