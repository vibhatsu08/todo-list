const addTask = document.getElementById('addTask');
const addTaskButton = document.getElementById('addTaskButton');
const form = document.getElementById('addTaskDiv');
const tasksParentDiv = document.getElementById('tasksParentDiv');

window.addEventListener (
    'load', function () {
        addTaskButton.addEventListener (
            'click', function (e) {
                e.preventDefault();

                // variable to store the task input
                const taskInput = addTask.value;

                // for task div.
                const task = document.createElement('div');
                task.classList.add('task');

                const taskText = document.createElement('div');
                taskText.classList.add('taskText');
                taskText.textContent = taskInput;
                task.appendChild(taskText);

                // for task buttons div, appending all the buttons to the parent buttons div
                const taskButtons = document.createElement('div');
                taskButtons.classList.add('taskButtons');
                const taskEditButton = document.createElement('button'); 
                taskEditButton.classList.add('taskEditButton');
                taskEditButton.textContent = "edit";
                const taskDoneButton = document.createElement('button');
                taskDoneButton.classList.add('taskDoneButton');
                taskDoneButton.textContent = "done";
                const taskDeleteButton = document.createElement('button');
                taskDeleteButton.classList.add('taskDeleteButton');
                taskDeleteButton.textContent = "delete";

                taskButtons.appendChild(taskEditButton);
                taskButtons.appendChild(taskDoneButton);
                taskButtons.appendChild(taskDeleteButton);
                task.appendChild(taskButtons);
                tasksParentDiv.appendChild(task);
                form.reset();

                taskEditButton.addEventListener (
                    'click', function () {
                        taskText.contentEditable = true;
                        taskEditButton.textContent = 'save';
                    }
                )
                taskEditButton.addEventListener (
                    'dblclick', function () {
                        taskText.contentEditable = false;
                        taskEditButton.textContent = 'edit';
                    }
                )
                taskDeleteButton.addEventListener (
                    'click', function () {
                        tasksParentDiv.removeChild(task);
                    }
                )
            }
        )
    }
)