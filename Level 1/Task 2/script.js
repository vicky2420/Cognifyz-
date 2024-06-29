// Function to change button color

document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightsalmon'];
    const currentColor = this.style.backgroundColor;
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);
    this.style.backgroundColor = newColor;
});

// Function to display greeting based on time

document.getElementById('greetButton').addEventListener('click', function() {
    const hours = new Date().getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    alert(greeting);
});

// Function for basic calculator

document.getElementById('calculateButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = 'Result: ' + result;
});

// Function to toggle dark mode

document.getElementById('darkModeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Function to add a new task to the to-do list

document.getElementById('addTodoButton').addEventListener('click', function() {
    const task = document.getElementById('todoInput').value;
    if (task.trim()) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        document.getElementById('todoList').appendChild(listItem);
        document.getElementById('todoInput').value = '';
    }
});

// Add event listener for removing tasks from to-do list on click

document.getElementById('todoList').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
