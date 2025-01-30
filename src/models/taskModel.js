let tasks = [{
    id: 0,
    title: 'Task 1',
    description: 'Description for Task 1'
    },
    {
    id: 2,
    title: 'Task 2',
    description: 'Description for Task 2'
    },
    {
    id: 3,
    title: 'Task 3',
    description: 'Description for Task 3'
    }

]; // In-memory storage
let idCounter = 1;

class Task {
    constructor(title, description) {
        this.id = idCounter++;
        this.title = title;
        this.description = description;
    }
}

module.exports = { tasks, Task };
