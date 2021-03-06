angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){ // Não seria injetado o routeProvider se não houvesse o ngRoute 

	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/fotos', {
		templateUrl : 'partials/principal.html',
		controller : 'FotosController'
	});

	$routeProvider.when('/fotos/form', {
		templateUrl : 'partials/foto.html',
		controller : 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId', {
		templateUrl : 'partials/foto.html',
		controller : 'FotoController'
	});

	$routeProvider.otherwise({
		redirectTo : '/fotos'
	});
});