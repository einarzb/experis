var app = angular.module('myApp', []);

//new way ctrler(['str', function(str){}]) -dependency injection
app.controller('currencyCtrl',['$scope', function($scope){
    $scope.shekel="";
    $scope.dollar = 0.27;
    $scope.euro = 0.23;
    $scope.japanYen = 30;
    $scope.pound = 0.21;
    $scope.egp = 5;
}]);
