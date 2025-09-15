let taskList = document.getElementById("taskList");
let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");
let newTaskInput = document.getElementById("newTask");

// Add new task
addBtn.addEventListener("click", function() {
  let taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    newTaskInput.value = "";
  }
});

// Delete last task
deleteBtn.addEventListener("click", function() {
  let lastTask = taskList.lastElementChild;
  if (lastTask) {
    taskList.removeChild(lastTask);
  }
});

// Double-click to edit task
taskList.addEventListener("dblclick", function(e) {
  if (e.target.tagName === "LI") {
    let task = e.target;
    let currentText = task.textContent;

    let input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "editing";

    task.textContent = "";
    task.appendChild(input);
    input.focus();

    // Save on Enter
    input.addEventListener("keydown", function(ev) {
      if (ev.key === "Enter") {
        task.textContent = input.value;
      }
    });

    // Save on blur
    input.addEventListener("blur", function() {
      task.textContent = input.value;
    });
  }
});