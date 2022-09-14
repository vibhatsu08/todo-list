// global variables
const addTask = document.getElementById('addTask');
const addTaskButton = document.getElementById('addTaskButton');
const form = document.getElementById('addTaskDiv');
const tasksParentDiv = document.getElementById('tasksParentDiv');

// event listener for when the window loads.
window.addEventListener (
    'load', function () {
        // event listener for when the add task button is pressed.
        addTaskButton.addEventListener (
            'click', function (e) {
                e.preventDefault();

                // variable to store the task input
                const taskInput = addTask.value;

                // form validation takes care of the input, checks if the input is valid or not, trims the extra white spaces to avoid empty task entries.
                if (taskInput.trim() == "") {
                    alert("enter valid input!");
                }
                else {
                    // for task div.
                    const task = document.createElement('div');
                    task.classList.add('task');

                    // for the task text div.
                    const taskText = document.createElement('div');
                    taskText.classList.add('taskText');
                    taskText.textContent = taskInput;
                    task.appendChild(taskText);

                    // for task buttons div, appending all the buttons to the parent buttons div
                    const taskButtons = document.createElement('div');
                    const taskEditButton = document.createElement('button'); 
                    const taskDoneButton = document.createElement('button');
                    const taskDeleteButton = document.createElement('button');
                    taskButtons.classList.add('taskButtons');
                    taskEditButton.classList.add('taskEditButton');
                    taskDoneButton.classList.add('taskDoneButton');
                    taskDeleteButton.classList.add('taskDeleteButton');
                    taskEditButton.textContent = "edit";
                    taskDoneButton.textContent = "done";
                    taskDeleteButton.textContent = "delete";

                    taskButtons.appendChild(taskEditButton);
                    taskButtons.appendChild(taskDoneButton);
                    taskButtons.appendChild(taskDeleteButton);

                    task.appendChild(taskButtons);

                    tasksParentDiv.appendChild(task);

                    // event listener for the task edit button when clicked once.
                    taskEditButton.addEventListener (
                        'click', function () {
                            taskText.contentEditable = true;
                            taskText.style.color = '#FC5130';
                            taskEditButton.textContent = 'save';
                        }
                    );

                    // event listener for the task edit button when clicked twice.
                    taskEditButton.addEventListener (
                        'dblclick', function () {
                            taskText.contentEditable = false;
                            taskText.style.color = '#FAF0CA';
                            taskEditButton.textContent = 'edit';
                        }
                    );
                    
                    // event listener for the task done button when clicked once.
                    taskDoneButton.addEventListener (
                        'click', function () {
                            task.style.backgroundColor = '#00A676';
                        }
                    );

                    // event listener for the task done button when clicked twice.
                    taskDoneButton.addEventListener (
                        'dblclick', function () {
                            task.style.backgroundColor = '#FFC857';
                        }
                    );

                    // event listener for the task delete button when clicked.
                    taskDeleteButton.addEventListener (
                        'click', function () {
                            tasksParentDiv.removeChild(task);
                        }
                    );

                    // resets the form after taking the input.
                    form.reset();
                }
            }
        )
    }
)