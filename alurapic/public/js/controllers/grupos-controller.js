angular.module('alurapic').controller('GruposController',['$scope', '$http', function($scope, $http){
	$scope.grupos = [];
	$http.get('v1/grupos')
	.success(function(grupos){
		$scope.grupos = grupos;
	})
	.error(function(){
		console.log("Erro ao pegar os grupos");
	});
}]);