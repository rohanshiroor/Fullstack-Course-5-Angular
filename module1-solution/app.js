(function(){
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController)
LunchCheckController.$inject = ['$scope']    
function LunchCheckController($scope) {
    $scope.dishes = ""; 
    $scope.message = "";
$scope.CheckTooMuch = function(){    
    var noDishes = $scope.dishes.split(',')
    if (noDishes == 0){
        $scope.message = "Please enter data first";
    }
    else if (noDishes.length > 3){
       $scope.message = "Too much!";
    }
    else {
        $scope.message="Enjoy";
    }
}    
};    
})();

