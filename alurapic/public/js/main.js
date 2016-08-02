angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){ // Não seria injetado o routeProvider se não houvesse o ngRoute 

	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/fotos', {
		templateUrl : 'partials/principal.html',
		controller : 'FotosController'
	});

	$routeProvider.when('/fotos/form', {
		templateUrl : 'partials/foto.html',
	});

	$routeProvider.otherwise({
		redirectTo : '/fotos'
	});
});