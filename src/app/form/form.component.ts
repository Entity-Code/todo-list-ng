import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  newTodo = "";

  todo = [];

  addTodo(): void {
    this.todo.push(this.newTodo);
    console.log(this.todo);
    this.newTodo = "";
  }

  

  ngOnInit(): void {

  }

}
