angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams, cadastroDeFotos, recursoFoto){
	$scope.foto={};
	$scope.mensagem = '';

	

	if($routeParams.fotoId){
		recursoFoto.get({fotoId : $routeParams.fotoId}, 
			function(foto){
				$scope.foto = foto;
			},
			function(erro){
				console.log(erro);
				$scope.mensagem = "Não foi possível obter a foto de ID: "+$routeParams.fotoId;
			});
	}


	$scope.submeter = function(){
		console.log($scope.foto);
		if($scope.formulario.$valid){
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(resultado.inclusao){
					$scope.foto = {};
				}
				$scope.formulario.$setPristine();
			})
			.catch(function(erro){
				console.log(erro.mensagem);
			});
		}
	};
});