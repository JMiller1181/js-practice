let taskManager = (function() {
  // your code here
  let tasks = [];
  function addTask(description) {
    tasks.push(description);
    return tasks;
  }
  function displayTasks() {
    for (index of tasks) {
        console.log(index);
    }
  }
  return { add: addTask, display: displayTasks}
})();

taskManager.add("Create an IIFE");
taskManager.add("Add three tasks");
taskManager.add("Display the tasks");
taskManager.display();
