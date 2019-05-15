import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoArray = [];

  constructor() {}

  ngOnInit() {}

  addTodo(value) {
    this.todoArray.push(value);
    console.log(this.todoArray);
  }
}
