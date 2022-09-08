newTask = () => {
    let task = document.createElement("div");
    let inputValue = document.getElementById("input_task").value;
    let task_text = document.createTextNode(inputValue);
    task.classList.add("task");
    task.appendChild(task_text);

    if (inputValue === "" || inputValue === " ") {
        alert("Please enter something!");
    }
    else {
        document.getElementById("tasks-container").appendChild(task);
    }
    document.getElementById("input_task").value = "";
}
