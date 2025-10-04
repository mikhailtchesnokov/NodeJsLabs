const Todos = require('./index');
const assert = require('assert').strict;
const fs = require('fs');

describe('saveToFile', function () {
    let todos;

    beforeEach(function () {
        todos = new Todos();
    });

    it('should save a single TODO', function (done) {
        todos.add('Test todo');

        todos.saveToFile((err) => {
            assert.strictEqual(fs.existsSync('todos.csv'), true);
            const actualFileContent = fs.readFileSync('todos.csv', 'utf8');
            assert.strictEqual(actualFileContent, 'Title, Completed\nTest todo, false\n');
            done(err);
        });
    });
});
