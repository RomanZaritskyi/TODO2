import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  newTodo: string
  todos: any
  todosObj: any

  constructor() {
    this.newTodo = '';
    this.todos = [];

  }

  addTodo(event) {
    this.todosObj = {
      newTodo: this.newTodo,
      compleated: false
    }
    this.todos.push(this.todosObj);
    this.newTodo = '';
    event.preventDefault();

  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    for (var i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }



}




