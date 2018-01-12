(function(){
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var ctrl1 = this;
        ctrl1.toBuy = ShoppingListCheckOffService.items_to_Buy();
        ctrl1.removeItem = function(index){
            ShoppingListCheckOffService.addToBought(index);    
        }
        
        ctrl1.ifempty = function(){
            if (ctrl1.toBuy.length == 0){
            return true;
            }    
            return false;
        }
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var ctrl2 = this;
        ctrl2.bought = ShoppingListCheckOffService.items_bought();
        console.log()
        ctrl2.ifempty = function(){
            if (ctrl2.bought.length == 0){
                return true;
            }    
            return false;
        }
    }
    
    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy = [];
        var bought = [];
        
        function addItem(name,quantity){
        var item = {
            name:name,
            quantity:quantity
        };
        toBuy.push(item)    
        }
        
        addItem("cookies",10);
        addItem("chips",7);
        addItem("cake",1);
        addItem("pizza",2);
        addItem("pasta",4);
        
        service.addToBought = function(index) {
        bought.push(toBuy[index]);
        toBuy.splice(index,1);    
        }  
        
        service.items_to_Buy = function(){
          return toBuy;  
        }
        
        service.items_bought = function(){
            return bought;
        }
    }
})();

