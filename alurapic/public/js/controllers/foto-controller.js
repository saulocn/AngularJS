angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams, recursoFoto){
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
				recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto,
					function(){
						console.log("Foto " + $scope.foto.titulo + " atualizada com sucesso!");
						$scope.mensagem = "Foto " + $scope.foto.titulo + " atualizada com sucesso!";
						$scope.formulario.$setPristine();
					},
					function(erro){
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
					$scope.formulario.$setPristine();
				})
				.error(function(error){
					console.log(error);
					$scope.mensagem = "Não foi possível cadastrar a foto "+$scope.foto.titulo+"!";
				});
			}
		}
	};
});