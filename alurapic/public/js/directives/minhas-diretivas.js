angular.module('minhasDiretivas', ['meusServicos'])
.directive('meuPainel', function(){ // no html é usado com HÍFEN - meu-painel
	var ddo = {};

	ddo.restrict = "AE"; // Atribute - Element

	ddo.scope = {
		titulo:'@' //pois o atributo interno é igual ao atributo recebido da diretiva (STRING, E NÃO A EXPRESSION), no html deverá ser <meu-painel titulo="titulo">
	};

	ddo.transclude = true;

	/*ddo.template = '<div class="panel panel-default col-md-2">'+
	'    <div class="panel-heading">'+
	'        <h3 class="panel-title">{{titulo}}</h3>'+
	'    </div>'+
	'    <div class="panel-body" ng-transclude>'+
	'    </div>'+
	'</div>';*/

	ddo.templateUrl = 'js/directives/meu-painel.html'

	return ddo;
})
.directive('minhaFoto', function(){ 
	var ddo = {};

	ddo.restrict = "AE"; 

	ddo.scope = {
		url:'@',
		titulo:'@' 
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/minha-foto.html'

	return ddo;
})

.directive('meuBotaoPerigo', function(){ 
	var ddo = {};

	ddo.restrict = "E"; 

	ddo.scope = {
		nome:'@', // Se trata de uma String
		acao:'&'  // Tenta avaliar uma expressão dentro do contexto do controller
	};


	ddo.templateUrl = 'js/directives/meu-botao-perigo.html'

	return ddo;
})
.directive('meuFocus', function(){ 
	var ddo = {};

	ddo.restrict = "A"; 

	/*ddo.scope = {
		focado:'=', // Se trata de uma String
	};*/

	ddo.link = function(scope, element){
		/*scope.$watch('focado', function(){
			if(scope.focado){
				// element.focus(); se usasse o jquery antes do AngularJS
				element[0].focus();
				//alert("Mudou!");
				scope.focado = false;
			}
		});*/

		scope.$on('fotoCadastrada', function(){
			element[0].focus();
		});
		};


	return ddo;
})
.directive('meusTitulos', function() {
	var ddo = {};
	ddo.restrict = 'E';
	ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
	 ddo.controller = function($scope, recursoFoto) {
            recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });    
            });
        };
	return ddo;
});