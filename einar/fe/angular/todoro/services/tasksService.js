
app.service('tasksService', function(){
  this.tasks = [];
  var tasks = [];

  this.addTaskToTasks = (newTask) => {
      var newObj = {id:newTask.id, title:newTask.title, body:newTask.body, importence:newTask.importence}
      tasks.push(newObj);
      this.saveTasks();
  }

  this.saveTasks = function() {
      return this.tasks;
    }

});
