angular.module('alurapic').controller('FotosController', function($scope, $http){
	$scope.fotos = [];
	$scope.filtro = "";
	$scope.mensagem = "";
	
	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});

	$scope.remover = function(foto){
		$http.delete('v1/fotos/'+foto._id)
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto,1);
			console.log("Foto "+foto.titulo+" removida com sucesso!");
			$scope.mensagem = "Foto "+foto.titulo+" removida com sucesso!";
		})
		.error(function(erro){
			console.log(erro);
			console.log("Não foi possível remover a foto: "+foto.titulo+"!");
			$scope.mensagem = "Não foi possível remover a foto: "+foto.titulo+"!";
		});
	};
});