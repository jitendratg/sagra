angular.module('sagra', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise('/app/login');

		$stateProvider
			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: 'partials/container.html',
				controller: 'mainCtrl'
			})
			.state('app.login', {
				url: '/login',
				templateUrl: 'partials/login.html',
				controller: 'loginCtrl'
			})
			.state('app.sites', {
				url: '/sites',
				templateUrl: 'partials/sites.html',
				controller: 'sitesCtrl'
			})
			.state('app.site', {
				url: '/site/:id',
				templateUrl: 'partials/site.html',
				controller: 'siteCtrl'
			})
			.state('app.manage', {
				url: '/manage/:id',
				templateUrl: 'partials/manage.html',
				controller: 'manageCtrl'
			});
	})
	.run(function() {
	});




