(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('CategoryController',CategoryController);
    
    CategoryController.$inject = ['category'];
    function CategoryController(category){
       var catctrl = this;
       catctrl.categories = category;   
    }    
})();