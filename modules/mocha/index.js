const fs = require('fs');

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

    saveToFile(callback){
        let fileContents ='Title, Completed\n' ;
        this.todos.forEach(todo => {
            fileContents += `${todo.title}, ${todo.complete}\n`;
        });
        fs.writeFile('todos.csv', fileContents, callback); 
    }

}

module.exports = Todos;