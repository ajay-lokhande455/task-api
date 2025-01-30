let tasks = []; // In-memory storage
let idCounter = 1;

class Task {
    constructor(title, description) {
        this.id = idCounter++;
        this.title = title;
        this.description = description;
    }
}

module.exports = { tasks, Task };
