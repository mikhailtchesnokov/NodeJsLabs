const Todos = require('./promises-index');
const assert = require('assert').strict;
const fs = require('fs');

describe('saveToFile', function () {
    let todos;

    beforeEach(function () {
        todos = new Todos();
    });

    afterEach(function(){
        if(fs.existsSync('todos.csv')){
            fs.unlinkSync('todos.csv');
        }
    });

    it('should save a single TODO', async function () {
        todos.add('Test todo');

        await todos.saveToFile();

        assert.strictEqual(fs.existsSync('todos.csv'), true);
        const actualFileContent = fs.readFileSync('todos.csv', 'utf8').toString();
        assert.strictEqual(actualFileContent, 'Title, Completed\nTest todo, false\n');
    });
});
