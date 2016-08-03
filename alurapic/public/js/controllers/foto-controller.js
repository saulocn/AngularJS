angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
	$scope.foto={};
	$scope.mensagem = '';

	if($routeParams.fotoId){
		$http.get('v1/fotos/'+$routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = "Não foi possível obter a foto de ID: "+$routeParams.fotoId;
		});
	}


	$scope.submeter = function(){
		console.log($scope.foto);
		if($scope.formulario.$valid){
			if($scope.foto._id){
				$http.put('v1/fotos/'+$scope.foto._id, $scope.foto)
				.success(function(){
					console.log("Foto " + $scope.foto.titulo + " atualizada com sucesso!");
					$scope.mensagem = "Foto " + $scope.foto.titulo + " atualizada com sucesso!";
				})
				.error(function(error){
					console.log(error);
					$scope.mensagem = "Não foi possível atualizar a foto "+$scope.foto.titulo+"!";
				});

			} else {
				console.log($scope.foto);
				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					console.log("Foto "+$scope.foto.titulo+" cadastrada com sucesso!");
					$scope.mensagem = "Foto "+$scope.foto.titulo+" cadastrada com sucesso!";
					$scope.foto = {};
				})
				.error(function(error){
					console.log(error);
					$scope.mensagem = "Não foi possível cadastrar a foto "+$scope.foto.titulo+"!";
				});
			}
		}
	};
});