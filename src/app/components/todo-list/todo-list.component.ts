import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo-model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private httpService: HttpService) {
    this.httpService.getAllTodos().subscribe((todoData)=> {
      this.todos = todoData as Todo[];
      console.log(this.todos);
      
    })

   }


  ngOnInit(): void {
  }

}
