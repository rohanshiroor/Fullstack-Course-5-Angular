(function(){
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    function FoundItemsDirective(){
        var ddo ={
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                found:'<',
                remove:'&',
                empty: '<'
            }
        };
        return ddo;
    }
    
   NarrowItDownController.$inject = ['MenuSearchService'];
   function NarrowItDownController(MenuSearchService){
       narrowDown = this;
       narrowDown.searchTerm = "";
       narrowDown.empty="";
       
       narrowDown.SearchDishes = function(){
           
       if (narrowDown.searchTerm !='') {       
       var promise = MenuSearchService.getMatchedMenuItems(narrowDown.searchTerm);
       promise.then(function(result){
           narrowDown.found = result;
           console.log(result);
       })
       .catch(function(error) {
			console.log(error);
       });
       }
           
       else {
            narrowDown.empty = MenuSearchService.emptyText()
        }   
       };
       narrowDown.remove = function(index){
           return MenuSearchService.removeItem(index);
       }
       
   }
    MenuSearchService.$inject = ['$http','ApiBasePath']
   function MenuSearchService($http,ApiBasePath){
       var service = this;
       foundItems = [];
       var emptyMessage = 'Nothing Found';
       
       service.getMatchedMenuItems = function(searchTerm){
        searchTerm = searchTerm.trim().toLowerCase();        
       return $http({
             method:"GET",
             url:(ApiBasePath+"/menu_items.json")
         })
       .then(function(response){
           
           for(i=0;i<response.data.menu_items.length;i++){
            if(response.data.menu_items[i].description.indexOf(searchTerm)!==-1) {
                foundItems.push(response.data.menu_items[i]);
            }    
           }
        return foundItems;
       })
       .catch(function(errorResponse) {
			console.log(errorResponse);
       }); 
       };
       service.removeItem = function(index){
           foundItems.splice(index,1);
           return foundItems;
       }
       service.emptyText = function(){
           return emptyMessage;
       }
   }    
    
})();

