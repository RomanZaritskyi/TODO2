import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = [];

  constructor() { }

  ngOnInit(): void {

    this.todos = [
      {
        compleated: false,
        content: 'Покормить собаку'
      },
      {
        compleated: false,
        content: 'Построить дом'
      },
      {
        compleated: false,
        content: 'Помыть машину'
      },
      {
        compleated: false,
        content: 'Купить продукты, молоко, соль, сахар, вода, макароны, мясо, моцарелла'
      },
      {
        compleated: true,
        content: 'Составить список'
      }
    ]
  }


}


