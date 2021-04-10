import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  @Input() todo;

  

  test(): void {
    console.log(this.todo);
  }

  ngOnInit(): void {
  }

}
