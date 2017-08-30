var app = angular.module('roboApp', []);

app.controller('roboCtrl', ['RoboService',function(RoboService){
  this.hello = RoboService.hello();
  this.robots = RoboService.showRobots();
  this.clearRobot = RoboService.clearRobot();
}]);
