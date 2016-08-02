angular.module('alurapic').controller('FotoController', function($scope, $http){
	$scope.foto={};
	$scope.exibe = false;
	$scope.mensagem = '';
	$scope.submeter = function(){
		if($scope.formulario.$valid){
			console.log($scope.foto);
			$http.post('v1/fotos', $scope.foto)
			.success(function(){
				$scope.foto = {};
				console.log("Foto cadastrada com sucesso!");
				$scope.mensagem = "Foto cadastrada com sucesso!";
			})
			.error(function(error){
				console.log(error);
				$scope.mensagem = "Não foi possível cadastrar a foto!";
			});
		}
	};
});