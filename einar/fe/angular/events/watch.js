var app = angular.module('watchModule', []);

//new way ctrler(['str', function(str){}]) -dependency injection
app.controller('watchCtrl',['$scope', function($scope){
    $scope.factor = 6;
    $scope.product = $scope.factor * 2;

    $scope.$watch("factor", function(newVal,oldVal){
        console.log("Watch is working:");
        console.log("im new val " + newVal);
        console.log("im old " + oldVal);
        $scope.product = newVal * 2;
    })

    var butt = document.getElementById("b1").addEventListener("click", function(){
        console.log("angular knows this button was clicked b/c of scope apply otherwise she wouldnt know !!");
        $scope.$apply("product = 100"); //its in string b/c its an expression
    });
}]);
