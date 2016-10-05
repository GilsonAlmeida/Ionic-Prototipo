angular.module('app.services', [])

//.factory('PropriedadesCompartilhadas', [function(){
//	var ItemSelecionado = [];

//        return {
//            getItem: function () {
//                return ItemSelecionado;
//            },
//            setItem: function(value) {
//                ItemSelecionado = value;
//            }
//        };

//}]);

//.service('BlankService', [function(){

//}]);

.service('ItemLaudoService', function () {
        var ItemSelecionado = [];

        return {
            getItem: function () {
                return ItemSelecionado;
            },
            setItem: function(value) {
                ItemSelecionado = value;
           }
       };
 });