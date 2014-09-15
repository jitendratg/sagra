var app = angular.module('sagra', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngAnimate']);

app
	.value('Sites', [
		{
			id:1,
			name: 'My first site',
			domain: 'example.com',
			status: 1
		}
	])
	.factory('User', function() {
		return {
			id: 0,
			name: '',
			clean: function() {
				this.id = 0;
				this.name = '';
			}
		}
	})
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise('/app/login');

		$stateProvider
			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: 'partials/container.html',
				controller: function($scope, User) {
					$scope.user = User;
				}
			})
			.state('app.login', {
				url: '/login',
				templateUrl: 'partials/login.html',
				controller: function($scope, $state, User) {
					User.clean();
					$scope.form = [];

					$scope.login = function(form) {
						User.id = 10;
						User.name = form.name || 'not entered';
						$state.go('app.sites');
					};
				}
			})
			.state('app.sites', {
				url: '/sites',
				templateUrl: 'partials/sites.html',
				controller: function($scope, Sites) {
					$scope.sites = Sites;
				}
			});
	})
	.run(function() {
	});




