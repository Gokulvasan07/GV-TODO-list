const addButton = document.getElementById("add-button");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);
taskList.addEventListener("click", toggleTask);

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <button class="delete-button">Delete</button>
  `;

  taskList.appendChild(listItem);
  newTaskInput.value = "";
}

function toggleTask(event) {
  if (event.target.tagName === "INPUT") {
    const listItem = event.target.parentElement;
    listItem.classList.toggle("completed");
  }

  if (event.target.classList.contains("delete-button")) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
}
