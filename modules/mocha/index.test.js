const Todos = require('./index');
const assert = require('assert').strict;

describe('Integration tests', function() {
    let todos;

   beforeEach(function() {
       todos = new Todos();
   });

   it("should be able to add and complete Todos", function() {       
       assert.strictEqual(todos.list().length, 0);
       todos.add('Test todo');
       todos.complete('Test todo');
       
       assert.deepEqual(todos.list(), [{ title: 'Test todo', complete: true }]);
       assert.strictEqual(todos.list().length, 1, "There should be one todo in the list");
   });

   describe('#add()', function() {
       it('should add a todo', function() {
           todos.add('Test todo');
           assert.deepStrictEqual(todos.list(), [{ title: 'Test todo', complete: false }]);
       });
   });

   describe('#complete()', function() {

       it('should complete a todo', function() {
           todos.add('Test todo');
           todos.complete('Test todo');
           assert.deepStrictEqual(todos.list(), [{ title: 'Test todo', complete: true }]);
       });

       it('should throw an error if todo not found', function() {
           assert.throws(() => todos.complete('Non-existent todo'), {
               message: 'Todo with Non-existent todo not found'
           });
       });
   });
});
