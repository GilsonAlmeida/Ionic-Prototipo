angular.module('app.controllers', [])
  
.controller('listagemOSCtrl',  
	function ($scope, $stateParams,ItemLaudoService) {
		
		$scope.listaOS = [
		{
			"codigo":"10",
			"exercicio":"2016"
		},
		{
			"codigo":"13",
			"exercicio":"2016"
		},			  ];
		

		$scope.addLaudo=function(item){
			ItemLaudoService.setItem(item);
		};	

	})

.controller('adicionarLaudoCtrl', function ($scope, $filter,$stateParams,ItemLaudoService) {
	$scope.itemLaudo = ItemLaudoService.getItem();
	$scope.dataLaudo = $filter('date')(new Date(),'dd/MM/yyyy');

	$scope.options = {
		  format: 'dd/mm/yyyy', // ISO formatted date
		  monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		  weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
		  today:'Hoje',
		  clear:'Limpar'

	}

})
   
.controller('visualizarLaudoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('adicionarLaudoManualCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('listagemLaudosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 