const container = document.getElementById("todo-container");
let completedCount = 0;

// Function to check if 5 tasks are completed
function checkFiveCompleted() {
  return new Promise(resolve => {
    if (completedCount === 5) {
      resolve("🎉 Congrats! 5 Tasks have been Successfully Completed");
    }
  });
}

// Fetch todos and display them
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(todos => {
    todos.slice(0, 20).forEach(todo => {
      // Create elements
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.disabled = todo.completed;

      const label = document.createElement("label");
      label.textContent = todo.title;
      label.style.marginLeft = "10px";

      const div = document.createElement("div");
      div.append(checkbox, label);
      container.appendChild(div);

      // Count user-completed tasks
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          completedCount += 1;
        } else {
          completedCount -= 1;
        }
        checkFiveCompleted().then(message => alert(message));
      });
    });
  });

// Logout button
document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "index.html";
});
