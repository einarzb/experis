
/* setting up testing enviroment */

describe('PasswordController', function() {
  beforeEach(module('app')); //inject the module for angular -- like ng-app

  var $controller; //create an objcet that holds the ctrler

  beforeEach(inject(function(_$controller_){ //inject ctrler for every test
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  /* running first test */
  describe('$scope.grade', function() { //tests certain function
    it('sets the strength to "strong" if the password length is >8 chars', function() {

      var $scope = {}; //always an empty one
      var controller = $controller('PasswordController', { $scope: $scope }); //same as ng-controller

      $scope.password = 'lo'; //the test

      $scope.grade(); //invokation

      expect($scope.strength).toEqual('weak');
    });
  });
});

/*******************************************************************
                     SECOND CONTROLLER AND TEST
 *****************************************************************/
/* setting up testing enviroment */

describe('numbersController', function() {
  beforeEach(module('app')); //inject the module for angular -- like ng-app

  var $controller; //create an objcet that holds the ctrler

  beforeEach(inject(function(_$controller_){ //inject ctrler for every test
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  /* running first test */
  describe('$scope.addNums', function() { //tests certain function
    it('sets the result to equal to 11 if the numbers adds alright', function() {

      var $scope = {}; //always an empty one
      var controller = $controller('numbersController', { $scope: $scope }); //same as ng-controller
//the test
      $scope.number1 = 5; 
      $scope.number2 = 2; 

      $scope.addNums(); //invokation

      expect($scope.result).toEqual(7);


    });
  });
});