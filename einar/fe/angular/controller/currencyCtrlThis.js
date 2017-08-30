var app = angular.module('myApp', []);

//THIS way
app.controller('currencyCtrlThis', [function(){
    this.shekel="";
    this.dollar = 0.27;
    this.euro = 0.23;
    this.euro = 0.23;
    this.japanYen = 30;
    this.pound = 0.21;
    this.egp = 5;

    //function
    this.toDollar = function(shekel){
        return (shekel * this.dollar);
    }
}]);

/*currencyCtrl as ctrl ==>
$scope.ctrler = this;
*/
