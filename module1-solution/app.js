(function(){
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController)
LunchCheckController.$inject = ['$scope']    
function LunchCheckController($scope) {
    $scope.dishes = ""; 
    $scope.message = "";
$scope.CheckTooMuch = function(){    
    var noDishes = $scope.dishes.split(',')
    if (noDishes.length <= 3){
        $scope.message = "Enjoy";
    }
    else {
        $scope.message = "Too much!";
    }
}    
};    
})();

