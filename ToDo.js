function addTask() {
    var taskList = document.getElementById('list1');

    var taskItem = document.createElement('li');
    taskItem.className = 'task';

    var taskInput = document.createElement('input');
    taskInput.type = 'text';

    var editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.onclick = function() {
        editTask(taskItem);
    };

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskInput);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
}

function editTask(taskItem) {
    var taskInput = taskItem.querySelector('input');
    var currentText = taskInput.value;

    var editText = prompt('Edit Task:', currentText);

    if (editText !== null) {
        taskInput.value = editText;
    }
}

