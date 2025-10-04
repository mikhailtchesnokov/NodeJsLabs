const fs = require('fs').promises;

class Todos {
    constructor() {
        this.todos = [];
    }

    list(){
        return [...this.todos];
    }
    
    add(title){
        let todo= {title, complete: false};
        this.todos.push(todo);
    }

    complete(title){
        let todoFound = false;
        let todo = this.todos.find(t => t.title === title);
        if (todo) {
            todo.complete = true;
            todoFound = true;
        }
        if (!todoFound) {
            throw new Error(`Todo with ${title} not found`);
        }
    }

    saveToFile(){
        let fileContents ='Title, Completed\n' ;
        this.todos.forEach(todo => {
            fileContents += `${todo.title}, ${todo.complete}\n`;
        });
        return fs.writeFile('todos.csv', fileContents);
    }

}

module.exports = Todos;