angular.module('alurapic').controller('FotosController', function($scope, $http){
	$scope.fotos = [
		{
			titulo: 'Leão',
			url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
		},	
		{
			titulo: 'Leão 2',
			url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
		},
	];

	var promise = $http.get('v1/fotos');
});