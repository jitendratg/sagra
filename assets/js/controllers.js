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
	.controller('mainCtrl', function($scope, User) {
		$scope.user = User;
	})
	.controller('loginCtrl', function($scope, $state, User) {
		User.clean();
		$scope.form = [];

		$scope.login = function(form) {
			User.id = 10;
			User.name = form.name || 'not entered';
			$state.go('app.sites');
		};
	});