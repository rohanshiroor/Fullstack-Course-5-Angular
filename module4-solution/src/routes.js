(function(){
    angular.module('MenuApp')
    .config(RoutesConfig);
    
RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];    function RoutesConfig($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
        url:'/',
        templateUrl: "src/Menu/templates/home.template.html"
    })
    .state('categories',{
        url:'/categories',
        templateUrl: "src/Menu/templates/categories.template.html",
        controller: 'CategoryController as catctrl',
        resolve: {
        category: ['MenuDataService',function(MenuDataService){
           return MenuDataService.getAllCategories();
    }]
    }
    })
    .state('items',{
        url:'/items/{menuItem}',
        templateUrl:"src/Menu/templates/items.template.html",
        controller:"ItemsController as itemctrl",
        resolve:{ 
            menuItems:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
            return MenuDataService.getItemsForCategory($stateParams.menuItem);
        }]
    }
    });
};
})();