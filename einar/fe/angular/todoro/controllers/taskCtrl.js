var app = angular.module('todoApp', []);

app.controller('taskCtrl', ['tasksService', function(tasksService){
  this.tasks = tasksService.saveTasks;
  this.addTask = tasksService.addTaskToTasks;
}]);

app.controller('passCtrl', ['passCtrl, $scope', function (passCtrl, $scope){
  $scope.password = "";
  $scope.grade = function(){
    var size = $scope.password.length;
    if (size > 8){
      $scope.strength = 'strong';
    } else if(size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  }
}]);
