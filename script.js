function keyEnter(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}

const nama = document.getElementsByName("nama")[0];
const submit = document.querySelector("#additem");

const tasksContainer = document.querySelector(".tasks");

const addItem = () => {
    const taskValue = nama.value.trim();
    if (taskValue !== '') {
        const listItem = document.createElement('div');
        listItem.textContent = taskValue;
        
        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
            updateLocalStorage();
        });
        listItem.appendChild(deleteButton);

        tasksContainer.appendChild(listItem);

        updateLocalStorage();
        nama.value = ''; // Clear input field
    } else {
        alert("Input field cannot be empty!");
    }
}

const updateLocalStorage = () => {
    const tasks = Array.from(tasksContainer.children).map(task => task.textContent.split('Delete')[0].trim());
    localStorage.setItem("data", JSON.stringify(tasks));
}

submit.onclick = addItem;

window.onload = () => {
    const storedTasks = JSON.parse(localStorage.getItem("data"));
    if (storedTasks) {
        storedTasks.forEach(task => {
            const listItem = document.createElement('div');
            listItem.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', () => {
                listItem.remove();
                updateLocalStorage();
            });
            listItem.appendChild(deleteButton);

            tasksContainer.appendChild(listItem);
        });
    }
};