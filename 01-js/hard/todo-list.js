/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todolist = [];
  }
  add(todo) {
    this.todolist.push(todo);
  }
  remove(indexOfTodo) {
    this.todolist.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (!(index >= 0 && index < this.todolist.length)) {
      return null;
    }
    this.todolist[index] = updatedTodo;
  }
  getAll() {
    return this.todolist;
  }
  get(indexOfTodo) {
    // before writing logic in if, clearly define what i want the param to be. also make use of example
    if (!(indexOfTodo >= 0 && indexOfTodo < this.todolist.length)) {
      return null;
    }
    return this.todolist[indexOfTodo];
  }
  clear() {
    this.todolist = [];
  }
}
module.exports = Todo;
var myTodo = new Todo();
myTodo.add("workout", "task2");
myTodo.add("task2");
myTodo.update(1, "updated task2");
console.log(myTodo.getAll());
myTodo.get(0);
console.log(myTodo.getAll());
