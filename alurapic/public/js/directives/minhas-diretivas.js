angular.module('minhasDiretivas', [])
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
});