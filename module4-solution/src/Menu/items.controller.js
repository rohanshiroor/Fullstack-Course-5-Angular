(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('ItemsController',ItemsController);
    
    ItemsController.$inject = ['menuItems'];
    function ItemsController(menuItems){
       var itemctrl = this;
       itemctrl.menuItems = menuItems;   
    }    
})();