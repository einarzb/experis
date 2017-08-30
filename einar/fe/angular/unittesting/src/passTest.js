angular.module('app', [])

.controller('PasswordController', function PasswordController($scope){

        //global scope
        $scope.password = '';
  
        $scope.grade = function() {
        //automatic var     
        var size = $scope.password.length;

        if (size > 8) {
            $scope.strength = 'strong';
        } else if (size > 3) {
            $scope.strength = 'medium';
        } else {
            $scope.strength = 'weak';
        }

      }; //end grade function
})

//second controller for other test

.controller('numbersController', function numbersController($scope){

        //global scope
        $scope.number1 = '';
        $scope.number2 = '';

        $scope.addNums = function() {
        //automatic var     
             $scope.result =  $scope.number1 + $scope.number2 + 2;
      }; //end addNums function
});