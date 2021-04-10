import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo;

  deleteTodo(i): void {
    this.todo.splice(i, 1);
  }

  constructor() { }
  
  

  ngOnInit(): void {
    
  }

}
