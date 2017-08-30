var app = angular.module('todoApp', []);

app.controller('roboCtrl', ['RoboService',function(RoboService){
  this.task = "";
  this.tasks = [];

  this.addTask = function(task){
      this.tasks.push(task);
      console.log(this.tasks);
      //clear input field
      this.task = "";
      return this.tasks;
  }

  this.clearList = function(){
    this.tasks = [];
  }

  this.clearTask = function(index){
    console.log(index);
    this.tasks.splice(index,1);
  }
}]);
